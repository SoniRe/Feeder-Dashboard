import { Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-energycharts',
  standalone: true,
  imports: [],
  templateUrl: './energycharts.component.html',
  styleUrl: './energycharts.component.css',
})
export class EnergychartsComponent {
  @ViewChild('myEnergyChart') chartDom1!: ElementRef;
  @ViewChild('loadChart') chartDom2!: ElementRef;

  ngAfterViewInit() {
    var chartDom1 = this.chartDom1.nativeElement;
    var myChart1 = echarts.init(chartDom1);
    var option1: EChartsOption;

    var chartDom2 = this.chartDom2.nativeElement;
    var myChart2 = echarts.init(chartDom2);
    var option2: EChartsOption;

    option1 = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          smooth: true,
        },
      ],
    };

    option1 && myChart1.setOption(option1);

    // Chart for Load
    option2 = {
      xAxis: {
        type: 'category',
        data: ['12:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
        axisLine: {
          lineStyle: {
            type: 'dashed',
            color: 'white',
            dashOffset: 10,
          },
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'white',
          },
        },
        axisLabel: {
          show: false,
        },
      },
      series: [
        {
          data: [900, 500, 600, 300, 500, 200, 800],
          type: 'line',
          smooth: true,
          showSymbol: false,
          lineStyle: {
            color: 'white',
            width: 3,
          },
        },
      ],
      backgroundColor: '#6147DC',
    };

    option2 && myChart2.setOption(option2);
  }
}
