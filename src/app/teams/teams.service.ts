import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TeamsService {

  private _url: string = 'http://data.nba.net/data/10s/prod/v1/2018/teams.json';

  constructor(private _http: HttpClient) { }

  getTeams() {
    return this._http.get(`https://cors-anywhere.herokuapp.com/${this._url}`);
  }
  
}
