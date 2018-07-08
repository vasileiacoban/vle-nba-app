import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PlayerService }  from './player.service';


@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})

export class PlayerDetailsComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('id');
  
  public playerDetails;

  constructor(
    private route: ActivatedRoute,
    private _playerService: PlayerService,
    private location: Location
  ) { }

  ngOnInit() {
    const ID = +this.route.snapshot.paramMap.get('id');
    this._playerService.getPlayerDetails(ID)
      .subscribe ((data: any) => this.playerDetails = data.resultSets);
  }
}
