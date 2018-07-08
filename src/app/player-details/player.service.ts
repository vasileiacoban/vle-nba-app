import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private _url: string = 'http://stats.nba.com/stats/commonplayerinfo';

  constructor(private _http: HttpClient) { }

  getPlayerDetails(playerId) {
    let Params = new HttpParams();
    Params = Params.append('PlayerID', playerId);
    return this._http.get(this._url,  { params: Params });
  }
}
