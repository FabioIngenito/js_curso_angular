import { TestBed } from '@angular/core/testing';

import { ClienteFilterAppService } from './cliente-filter-app.service';

describe('ClienteFilterAppService', () => {
  let service: ClienteFilterAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteFilterAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
