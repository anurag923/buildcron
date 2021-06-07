import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityinspectionComponent } from './qualityinspection.component';

describe('QualityinspectionComponent', () => {
  let component: QualityinspectionComponent;
  let fixture: ComponentFixture<QualityinspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityinspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
