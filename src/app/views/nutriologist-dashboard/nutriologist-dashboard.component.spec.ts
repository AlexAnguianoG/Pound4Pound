import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutriologistDashboardComponent } from './nutriologist-dashboard.component';

describe('NutriologistDashboardComponent', () => {
  let component: NutriologistDashboardComponent;
  let fixture: ComponentFixture<NutriologistDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutriologistDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutriologistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
