/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CcAlertService } from './cc-alert.service';

describe('CcAlert Service', () => {
  beforeEachProviders(() => [CcAlertService]);

  it('should ...',
      inject([CcAlertService], (service: CcAlertService) => {
    expect(service).toBeTruthy();
  }));
});
