import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcreportsComponent } from './ncreports.component';

describe('NcreportsComponent', () => {
  let component: NcreportsComponent;
  let fixture: ComponentFixture<NcreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
