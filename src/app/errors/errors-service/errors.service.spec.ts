import { ErrorsService } from './errors.service';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ErrorsService]
    });
  });

  it('should be created', inject([ErrorsService], (service: ErrorsService) => {
    expect(service).toBeTruthy();
  }));
});
