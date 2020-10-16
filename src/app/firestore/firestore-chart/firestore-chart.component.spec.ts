import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestoreChartComponent } from './firestore-chart.component';

describe('FirestoreChartComponent', () => {
  let component: FirestoreChartComponent;
  let fixture: ComponentFixture<FirestoreChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirestoreChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestoreChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
