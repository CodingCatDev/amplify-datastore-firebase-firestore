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
  constructor(
    private route: ActivatedRoute,
    private fireAuth: AngularFireAuth) {
        Amplify.Logger.LOG_LEVEL = 'DEBUG';
     }

  ngOnInit(): void {
    this.fireAuth.user.pipe(
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
      })).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  updateRoom(user: firebase.User): void {
    this.route.params.pipe(switchMap(params => {
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
          const originalRoom = roomQuery && roomQuery.length > 0 ? roomQuery[0] : new FvDRoom({name: params.id});
          const fvDRoom = await DataStore.save(
            FvDRoom.copyOf(originalRoom, updated => {
              updated.name = params.id;
            })
          );

          const userQuery = (await DataStore.query(FvDUser)).filter(u => u.roomID === fvDRoom.id);
          const originalUser = userQuery && userQuery.length > 0 ? userQuery[0] : new FvDUser({roomID: params.id});
          const fvDUser = await DataStore.save(
            FvDUser.copyOf(originalUser, updated => {
              updated.roomID = fvDRoom.id;
              updated.expression = expression;
            })
          );
          console.log(fvDRoom, fvDUser);
        }));
    })).subscribe();
  }

  emotionCount(params: Params, emotion: string): Observable<number> {
    const count$ = new BehaviorSubject(0);
    DataStore.observe(FvDUser).subscribe(msg => {
      count$.next(msg.element.expression.filter(e => e === emotion).length);
    });
    return count$;
  }
}
