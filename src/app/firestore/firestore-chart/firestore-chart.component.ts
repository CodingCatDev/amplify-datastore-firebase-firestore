import { AngularFirestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { firestore } from 'firebase';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-firestore-chart',
  templateUrl: './firestore-chart.component.html',
  styleUrls: ['./firestore-chart.component.scss'],
})
export class FirestoreChartComponent {
  private destroy$ = new Subject<boolean>();

  view: any[] = [1200, 720];

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Expressions';
  yAxisLabel = 'Minute';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  multi = [];

  public happy$: Observable<number>;
  public sad$: Observable<number>;
  public neutral$: Observable<number>;
  public surprised$: Observable<number>;
  public angry$: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) {
    Object.assign(this, this.multi);

    this.route.params
      .pipe(
        takeUntil(this.destroy$),
        switchMap((params) =>
          firestore.collection<any>
            (`/rooms/${params.id}/aggregate`, ref =>
              ref.orderBy('timestamp', 'desc').limit(5)
            ).valueChanges().pipe(
              map(docs =>
                docs.map(doc => {
                  const newDate = doc.timestamp.toDate();
                  return {
                    name: `${newDate.getUTCMinutes()}`,
                    series: [
                      {
                        name: 'happy',
                        value: doc.happy
                      }
                      , {
                        name: 'sad',
                        value: doc.sad
                      }
                      , {
                        name: 'neutral',
                        value: doc.neutral
                      }
                      , {
                        name: 'surprised',
                        value: doc.surprised
                      }
                      , {
                        name: 'angry',
                        value: doc.angry
                      }
                    ]
                  };
                })
              )
            )
        )
      ).subscribe(c => this.multi = c)
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
