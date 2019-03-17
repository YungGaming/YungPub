import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public results = [0, 0];

  public options = {
    layout: {
      padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
      }
    },
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: false
    },
    legend: {
      display: false
    },
    scale: {
      ticks: {
        display: false,
        fontSize: 12,
        backdropColor: 'transparent' // should render black behind the text
      }
    }
  };

  public data = {
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

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
