import { TestBed } from '@angular/core/testing';

import { ServicioActoresService } from './servicio-actores.service';

describe('ServicioActoresService', () => {
  let service: ServicioActoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioActoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
