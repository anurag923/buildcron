import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetypermitComponent } from './safetypermit.component';

describe('SafetypermitComponent', () => {
  let component: SafetypermitComponent;
  let fixture: ComponentFixture<SafetypermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetypermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetypermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
