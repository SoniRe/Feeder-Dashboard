import { Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [],
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.css',
})
export class BarchartComponent {
  @ViewChild('myBarChart') chartDom!: ElementRef;

  ngAfterViewInit() {
    var myChart = echarts.init(this.chartDom.nativeElement);
    var option: EChartsOption;

    option = {
      color: '#3361E0',
      xAxis: {
        type: 'category',
        data: [
          'Agriculture',
          'Industry',
          'Traffic',
          'I.T.',
          'Household',
          'Private',
        ],
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [
        {
          data: [12, 28, 20, 35, 9, 40],
          type: 'bar',
          label: {
            show: true,
            formatter: '{c}%',
            position: 'top',
          },
        },
      ],
    };

    option && myChart.setOption(option);
  }
}
