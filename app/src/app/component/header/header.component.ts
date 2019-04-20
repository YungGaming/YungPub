import { Component, OnInit } from '@angular/core';
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuToggle = false;

  constructor(public state: StateService) { }

  ngOnInit() {

  }

}
