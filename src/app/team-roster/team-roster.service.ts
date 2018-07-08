import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Team } from '../team';

@Injectable({
  providedIn: 'root'
})
export class TeamRosterService {
  
  @Input() team: Team;
  
  private _url: string = 'http://stats.nba.com/stats/commonteamroster';

  constructor(private _http: HttpClient) { }

  getPlayers(teamId) {
    let Params = new HttpParams();
    Params = Params.append('Season', '2017-18');
    Params = Params.append('TeamID', teamId);
    return this._http.get(this._url,  { params: Params });
  }

}
