import { Component, OnInit } from '@angular/core';
import { StateService } from '../../service/state.service';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-profile-gun-stats',
  templateUrl: './profile-gun-stats.component.html',
  styleUrls: ['./profile-gun-stats.component.scss']
})
export class ProfileGunStatsComponent implements OnInit {

  constructor(public state: StateService, public player: PlayerService) { }

  ngOnInit() {

  }


}
