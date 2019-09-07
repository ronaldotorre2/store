import { TestBed } from '@angular/core/testing';

import { AlertModelService } from './alert-modal.service';

describe('AlartModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertModelService = TestBed.get(AlertModelService);
    expect(service).toBeTruthy();
  });
});
