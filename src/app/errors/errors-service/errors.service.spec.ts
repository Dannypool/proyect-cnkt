import { TestBed, inject } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import { ErrorsService } from './errors.service';

describe('ErrorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers: [ErrorsService]
    });
  });

  it('should be created', inject([ErrorsService], (service: ErrorsService) => {
    expect(service).toBeTruthy();
  }));
});
