import { TestBed } from '@angular/core/testing';

import { OQueFazemosService } from './o-que-fazemos.service';

describe('OQueFazemosService', () => {
  let service: OQueFazemosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OQueFazemosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
