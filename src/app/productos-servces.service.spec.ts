import { TestBed } from '@angular/core/testing';

import { ProductosServcesService } from './productos-servces.service';

describe('ProductosServcesService', () => {
  let service: ProductosServcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosServcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
