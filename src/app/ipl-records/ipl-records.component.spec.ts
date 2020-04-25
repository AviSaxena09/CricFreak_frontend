import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IPLRecordsComponent } from './ipl-records.component';

describe('IPLRecordsComponent', () => {
  let component: IPLRecordsComponent;
  let fixture: ComponentFixture<IPLRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IPLRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IPLRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
