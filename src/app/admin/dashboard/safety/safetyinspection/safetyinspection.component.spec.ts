import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyinspectionComponent } from './safetyinspection.component';

describe('SafetyinspectionComponent', () => {
  let component: SafetyinspectionComponent;
  let fixture: ComponentFixture<SafetyinspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyinspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
