import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public teams; 

  selectedTeam: Team;

  constructor(private _teamService: TeamsService) { }

  ngOnInit() {
    this._teamService.getTeams()
    .subscribe((data: any) => this.teams = data.league.standard.filter(team => team.isNBAFranchise == true));    
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

}
