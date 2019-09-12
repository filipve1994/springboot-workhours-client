import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from 'rxjs/operators';
import {ChartOptions, ChartType} from "ng-chartist";

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  constructor() {
  }


  ngOnInit() {

  }

}
