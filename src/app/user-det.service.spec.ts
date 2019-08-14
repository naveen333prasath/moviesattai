import { TestBed } from '@angular/core/testing';

import { UserDetService } from './user-det.service';

describe('UserDetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDetService = TestBed.get(UserDetService);
    expect(service).toBeTruthy();
  });
});
