import { TestBed } from '@angular/core/testing';

import { HabboService } from './habbo.service';

describe('HabboService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HabboService = TestBed.get(HabboService);
    expect(service).toBeTruthy();
  });
});
