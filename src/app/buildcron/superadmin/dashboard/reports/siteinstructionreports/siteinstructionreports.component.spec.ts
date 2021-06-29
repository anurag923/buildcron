import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteinstructionreportsComponent } from './siteinstructionreports.component';

describe('SiteinstructionreportsComponent', () => {
  let component: SiteinstructionreportsComponent;
  let fixture: ComponentFixture<SiteinstructionreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteinstructionreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteinstructionreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
