import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminlandingpageComponent } from './superadminlandingpage.component';

describe('SuperadminlandingpageComponent', () => {
  let component: SuperadminlandingpageComponent;
  let fixture: ComponentFixture<SuperadminlandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminlandingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminlandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
