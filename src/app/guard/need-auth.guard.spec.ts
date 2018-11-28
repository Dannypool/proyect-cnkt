import { TestBed, async, inject } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import { NeedAuthGuard } from './need-auth.guard';

describe('NeedAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers: [NeedAuthGuard]
    });
  });

  it('should ...', inject([NeedAuthGuard], (guard: NeedAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
