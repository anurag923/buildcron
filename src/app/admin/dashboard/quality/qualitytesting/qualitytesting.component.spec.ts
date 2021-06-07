import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitytestingComponent } from './qualitytesting.component';

describe('QualitytestingComponent', () => {
  let component: QualitytestingComponent;
  let fixture: ComponentFixture<QualitytestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualitytestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitytestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
