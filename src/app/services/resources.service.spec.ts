import { TestBed, inject } from '@angular/core/testing'

import { ResourcesService } from './resources.service'
import { HttpClientModule } from '@angular/common/http'

describe('ResourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ResourcesService]
    })
  })

  it('should be created', inject([ResourcesService], (service: ResourcesService) => {
    expect(service).toBeTruthy()
  }))
})
