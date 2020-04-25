import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WicketPredictionComponent } from './wicket-prediction.component';

describe('WicketPredictionComponent', () => {
  let component: WicketPredictionComponent;
  let fixture: ComponentFixture<WicketPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WicketPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WicketPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
