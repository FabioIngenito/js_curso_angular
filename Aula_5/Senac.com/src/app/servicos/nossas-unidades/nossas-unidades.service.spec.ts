import { TestBed } from '@angular/core/testing';

import { NossasUnidadesService } from './nossas-unidades.service';

describe('NossasUnidadesService', () => {
  let service: NossasUnidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NossasUnidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
