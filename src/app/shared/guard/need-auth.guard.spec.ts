import { async, inject, TestBed } from '@angular/core/testing';
import { NeedAuthGuard } from './need-auth.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('NeedAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [NeedAuthGuard]
    });
  });

  it('should ...', inject([NeedAuthGuard], (guard: NeedAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
