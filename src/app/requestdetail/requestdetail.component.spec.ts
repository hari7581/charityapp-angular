import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdetailComponent } from './requestdetail.component';

describe('RequestdetailComponent', () => {
  let component: RequestdetailComponent;
  let fixture: ComponentFixture<RequestdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
