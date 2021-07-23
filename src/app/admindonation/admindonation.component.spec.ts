import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindonationComponent } from './admindonation.component';

describe('AdmindonationComponent', () => {
  let component: AdmindonationComponent;
  let fixture: ComponentFixture<AdmindonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
