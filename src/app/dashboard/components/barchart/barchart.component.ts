import {Component, OnInit} from '@angular/core';
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData
} from 'chartist';
import {ChartEvent, ChartType} from 'ng-chartist';

@Component({
  selector: 'app-barchart',
  // templateUrl: './barchart2.component.html',
  template: `
      <x-chartist
              [type]="type"
              [data]="data"
              [options]="options"
              [events]="events"
      ></x-chartist>
  `,
  // styleUrls: ['./barchart2.component.scss']
})

// export class BarchartComponent implements OnInit {
export class BarchartComponent {

  type: ChartType = 'Bar';

  data: IChartistData = {
    // labels: [
    //   'Jan',
    //   'Feb',
    //   'Mar',
    //   'Apr',
    //   'May',
    //   'Jun',
    //   'Jul',
    //   'Aug',
    //   'Sep',
    //   'Oct',
    //   'Nov',
    //   'Dec'
    // ],
    // series: [
    //   [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
    //   [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    // ],
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
    ],
    series: [
      [9, 4, 11, 7, 10, 12],
      [3, 2, 9, 5, 8, 10]
    ]
  };

  options: IBarChartOptions = {
    axisX: {
      showGrid: false
    },
    height: 380
  };

  events: ChartEvent = {
    draw: (data) => {
      if (data.type === 'bar') {
        data.element.animate({
          y2: <IChartistAnimationOptions>{
            dur: '0.5s',
            from: data.y1,
            to: data.y2,
            easing: 'easeOutQuad'
          }
        });
      }
    }
  };
}
