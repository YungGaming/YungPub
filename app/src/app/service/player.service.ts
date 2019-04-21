import { Injectable } from '@angular/core';
import { StateService } from './state.service';

import { weapons } from './data.weapons';
import { options } from './chart.options';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public loadingState = 'none';
  public profile = {};

  public weapons = weapons;

  public tabStates = [
    'all stats',
    'gun stats',
    'game review',
    'game analysis',
  ];

  public tab = 'all stats';

  public mapTypes = [
    'Erangel',
    'Miramar',
    'Sanhok',
    'Vikendi',
  ];

  public mapFilters = [
    'Erangel',
    'Miramar',
    'Sanhok',
    'Vikendi',
  ];

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

  constructor(private state: StateService) {
    console.log(this.weapons);
  }

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

  public async toggleFilter(map) {
    const index = this.mapFilters.indexOf(map);
    if (index !== -1) {
      this.mapFilters.splice(index, 1);
    } else {
      this.mapFilters.push(map);
    }
  }

  public async reviewGame() {
    this.tab = 'game analysis';
  }

}
