import { Component, OnInit } from '@angular/core';
import { StateService } from '../../service/state.service';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-profile-all-stats',
  templateUrl: './profile-all-stats.component.html',
  styleUrls: ['./profile-all-stats.component.scss']
})
export class ProfileAllStatsComponent implements OnInit {

  constructor(public state: StateService, public player: PlayerService) { }

  ngOnInit() {

  }

}
