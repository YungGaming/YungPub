import { Component, OnInit } from '@angular/core';
import { StateService } from '../../service/state.service';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(public state: StateService, public player: PlayerService) { }

  ngOnInit() {

  }

}
