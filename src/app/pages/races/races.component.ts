import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {
  data: any;
  chartpotions: any;

  constructor() {
   }

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: ["1:32:546", "1:36:546", "1:32:546", "1:30:546", "1:32:546", "1:38:546", "1:32:546"],
              fill: false,
              borderColor: '#4bc0c0'
          },
          {
              label: 'Second Dataset',
              data: ["1:28:546", "1:31:546", "1:24:546", "1:32:546", "1:36:546", "1:32:546", "1:30:546"],
              fill: false,
              borderColor: '#565656'
          }
      ]
    }
    this.chartpotions = {
      scales: {
        yAxes: [{
          type: 'time',
          time: {
            parser: 'm:ss:SSS',
            unit: 'seconds',
            unitStepSize: 5,
            min: '0:0.0',
            max: '2:0.0',
            displayFormats: {
              'seconds': 'mm:ss.SSS'
            }
          }
        }]
      }
    }
  }

}
