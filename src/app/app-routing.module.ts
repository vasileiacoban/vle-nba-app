import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent }      from './teams/teams.component';
import { PlayerDetailsComponent }      from './player-details/player-details.component';

const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: 'player-details/:id', component: PlayerDetailsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule {

}