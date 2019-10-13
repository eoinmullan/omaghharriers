import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfMarathonComponent } from './half-marathon.component';

describe('HalfMarathonComponent', () => {
  let component: HalfMarathonComponent;
  let fixture: ComponentFixture<HalfMarathonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfMarathonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfMarathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
