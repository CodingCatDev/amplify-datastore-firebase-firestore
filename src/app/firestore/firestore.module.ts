import { FacesModule } from './../faces/faces.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreComponent } from './firestore.component';
import { FirestoreChartComponent } from './firestore-chart/firestore-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [FirestoreComponent, FirestoreChartComponent],
  imports: [
    CommonModule,
    FacesModule,
    NgxChartsModule,
  ],
  exports: [FirestoreComponent, FirestoreChartComponent]
})
export class FirestoreModule { }
