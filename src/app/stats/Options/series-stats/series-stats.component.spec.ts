import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesStatsComponent } from './series-stats.component';

describe('SeriesStatsComponent', () => {
  let component: SeriesStatsComponent;
  let fixture: ComponentFixture<SeriesStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
