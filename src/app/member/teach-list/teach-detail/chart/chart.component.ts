import { Component, OnInit, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'ag-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() chartdata: any = null;
  // Doughnut
  public doughnutChartLabels: string[] = ['Underperform', 'Overperform', 'On Target'];
  public doughnutChartType: string = 'doughnut';

  public chartColors: any[] = [
    'rgb(244, 203, 204)',// Underperform - Red
    'rgb(183, 202, 121)',// Overperform - Green
    'rgb(249, 221, 150)'// On Target - Yellow
  ];

  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
    this.doughnutChartDatasets = [
      { data: this.chartdata, backgroundColor: this.chartColors }
    ];

  }

}
