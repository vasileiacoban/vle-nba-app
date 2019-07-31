import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';
import { TeamRosterService } from './team-roster.service';

@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.scss']
})
export class TeamRosterComponent implements OnInit {
  @Input() team: Team;

  public players;
  displayedColumns: string[] = ['id', 'name', 'height', 'weight', 'birth_date'];

  constructor(private _teamRosterService: TeamRosterService) { }

  ngOnInit() {
    this._teamRosterService.getPlayers(this.team.teamId)
    .subscribe((data: any) => {
      console.log(data)
      this.players = data.resultSets[0].rowSet
    });
  }

  ngOnChanges(){

  }
}
