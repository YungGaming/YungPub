import { Injectable } from '@angular/core';
import { StateService } from './state.service';

import { options } from './chart.options';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public loadingState = 'none';
  public profile = {};
  public tab = 'all stats';

  public chartOptions = options;
  public overview = {
    labels: ['Fighter', 'Camper', 'Wanderer'],
    datasets: [
      {
        backgroundColor: 'rgba(55, 145, 104, 0.2)',
        borderColor: 'rgb(55, 145, 104)',
        pointBackgroundColor: 'rgb(55, 145, 104)',
        data: [100, 40, 25]
      }
    ]
  };

  constructor(private state: StateService) { }

  public async lookup(query: string) {
    this.loadingState = 'searching';
    setTimeout(() => {
      this.loadingState = 'transition';
      setTimeout(() => {
        this.state.tab = 'profile';
      }, 500);
      setTimeout(() => {
        this.loadingState = 'none';
      }, 1000);
    }, 1000);
  }

}
