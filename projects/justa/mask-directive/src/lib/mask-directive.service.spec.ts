import { TestBed } from '@angular/core/testing';

import { MaskDirectiveService } from './mask-directive.service';

describe('MaskDirectiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaskDirectiveService = TestBed.get(MaskDirectiveService);
    expect(service).toBeTruthy();
  });
});
