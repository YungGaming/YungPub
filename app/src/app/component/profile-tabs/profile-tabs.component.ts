import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.scss']
})
export class ProfileTabsComponent implements OnInit {

  constructor(public player: PlayerService) { }

  ngOnInit() {

  }

}
