import { Component, OnInit } from '@angular/core';
import {ChartEvent, ChartType} from "ng-chartist";
import {IChartistAnimationOptions, IChartistData, IPieChartOptions} from "chartist";

@Component({
  selector: 'app-piechart',
  //templateUrl: './piechart.component.html',
  template: `
      <x-chartist
              [type]="type"
              [data]="data"
              [options]="options"
      ></x-chartist>
  `,
  styleUrls: ['./piechart.component.scss']
})
//export class PiechartComponent implements OnInit {
export class PiechartComponent {

  type: ChartType = 'Pie';

  data: IChartistData = {
    "series": [20, 10, 30, 40]
  };

  options: IPieChartOptions = {
    // width: '280px',
    width: '100%',
    height: '300px',
    donut: true,
    //donutWidth: 60,
    donutWidth: 30,
    showLabel: false,
    //startAngle: 270,
    //total: 200
  };

  // height: 300px;
  // width: 280px;
  // margin: 0 auto;



}
