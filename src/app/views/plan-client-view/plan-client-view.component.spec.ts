import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanClientViewComponent } from './plan-client-view.component';

describe('PlanClientViewComponent', () => {
  let component: PlanClientViewComponent;
  let fixture: ComponentFixture<PlanClientViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanClientViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanClientViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
