import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
