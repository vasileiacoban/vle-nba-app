import { TestBed, inject } from '@angular/core/testing';

import { TeamRosterService } from './team-roster.service';

describe('TeamRosterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamRosterService]
    });
  });

  it('should be created', inject([TeamRosterService], (service: TeamRosterService) => {
    expect(service).toBeTruthy();
  }));
});
