import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { tap, takeUntil, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase/app';
import { DataStore } from '@aws-amplify/datastore';
import { FvDRoom, FvDUser } from 'src/models';
import { Amplify } from '@aws-amplify/core';
@Component({
  selector: 'app-datastore',
  templateUrl: './datastore.component.html',
  styleUrls: ['./datastore.component.css']
})
export class DatastoreComponent implements OnInit, OnDestroy {
  @Input() expressions$: BehaviorSubject<string[]>;

  private destroy$ = new Subject<boolean>();
  public happy$: Observable<number>;
  public sad$: Observable<number>;
  public neutral$: Observable<number>;
  public surprised$: Observable<number>;
  public angry$: Observable<number>;

  public user$: Observable<firebase.User>;
  constructor(
    private route: ActivatedRoute,
    private fireAuth: AngularFireAuth) {
    // Turn this on if you want to debug
    // Amplify.Logger.LOG_LEVEL = 'DEBUG';
  }

  ngOnInit(): void {
    this.user$ = this.fireAuth.user.pipe(
      takeUntil(this.destroy$),
      tap(async user => {
        if (user == null) {
          try {
            await this.fireAuth.signInAnonymously();
            this.updateRoom(user);
          } catch (err) {
            console.log(err);
          }
        } else {
          this.updateRoom(user);
        }
      }));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  updateRoom(user: firebase.User): void {
    this.route.params.pipe(
      takeUntil(this.destroy$),
      switchMap(params => {
        this.happy$ = this.emotionCount(params, 'happy');
        this.sad$ = this.emotionCount(params, 'sad');
        this.neutral$ = this.emotionCount(params, 'neutral');
        this.surprised$ = this.emotionCount(params, 'surprised');
        this.angry$ = this.emotionCount(params, 'angry');

        return this.expressions$.pipe(
          takeUntil(this.destroy$),
          distinctUntilChanged((prev, curr) => prev[0] === curr[0]),
          tap(async expression => {
            const roomQuery = await DataStore.query(FvDRoom, r => r.name('eq', params.id));
            let fvDRoom;
            if (roomQuery && roomQuery.length > 0) {
              fvDRoom = await DataStore.save(
                FvDRoom.copyOf(roomQuery[roomQuery.length - 1], updated => {
                  updated.name = params.id;
                })
              );
            } else {
              fvDRoom = await DataStore.save(new FvDRoom({ name: params.id }));
            }
            console.log(fvDRoom);
            const userQuery = (await DataStore.query(FvDUser)).filter(u => u.roomID === fvDRoom.id && u.uid === user.uid);

            let fvDUser;
            if (userQuery && userQuery.length > 0) {
              fvDUser = await DataStore.save(
                FvDUser.copyOf(userQuery[userQuery.length - 1], updated => {
                  updated.roomID = fvDRoom.id;
                  updated.expression = expression || [];
                })
              );
            } else {
              fvDUser = await DataStore.save(new FvDUser({ roomID: fvDRoom.id, uid: user.uid, expression: [] }));
            }
            console.log(fvDUser);
          }));

      })).subscribe();
  }

  emotionCount(params: Params, emotion: string): Observable<number> {
    const count$ = new BehaviorSubject(0);
    DataStore.observe(FvDUser).subscribe(async msg => {
      const roomQuery = await DataStore.query(FvDRoom, r => r.name('eq', params.id));
      const originalRoom = roomQuery && roomQuery.length > 0 ? roomQuery[0] : null;
      if (originalRoom) {
        const userQuery = (await DataStore.query(FvDUser)).filter(u => u.roomID === originalRoom.id);
        let count = 0;
        userQuery.filter(u => u.expression.includes(emotion)).forEach(user => {
          count = count + user?.expression.length || 0;
        });
        count$.next(count);
      } else {
        count$.next(0);
      }
    });
    return count$;
  }
}
