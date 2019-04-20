import { Component, OnInit } from '@angular/core';
import { StateService } from '../../service/state.service';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public selectToggle = false;

  constructor(public state: StateService, public player: PlayerService) { }

  ngOnInit() {

  }

}
