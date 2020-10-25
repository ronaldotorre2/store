import { TestBed } from '@angular/core/testing';

import { ConfirmModelService } from './confirm-model.service';

describe('ConfirmModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmModelService = TestBed.get(ConfirmModelService);
    expect(service).toBeTruthy();
  });
});
