import { TestBed } from '@angular/core/testing';

import { RequestdetailService } from './requestdetail.service';

describe('RequestdetailService', () => {
  let service: RequestdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
