import { Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-outagecharts',
  standalone: true,
  imports: [],
  templateUrl: './outagecharts.component.html',
  styleUrl: './outagecharts.component.css',
})
export class OutagechartsComponent {
  @ViewChild('monthlyOutageChart') chartDom!: ElementRef;
  @ViewChild('todaysOutageChart') chartDom1!: ElementRef;

  ngAfterViewInit() {
    var chartDom = this.chartDom.nativeElement;
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: {
        type: 'category',
        data: [],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [
            { value: 10, itemStyle: { color: '#7DE397' } },
            { value: 20, itemStyle: { color: '#70D7FF' } },
            { value: 15, itemStyle: { color: '#FF6961' } },
            { value: 25, itemStyle: { color: '#FFD426' } },
          ],
          type: 'bar',
          itemStyle: {
            borderRadius: [50, 50, 0, 0],
          },
          label: {
            show: true,
            position: 'top',
            fontWeight: 'Bold',
          },
        },
      ],
    };

    option && myChart.setOption(option);

    // Making Daily Outage Chart
    var chartDom1 = this.chartDom1.nativeElement;
    var myChart1 = echarts.init(chartDom1);
    var option1;

    const gaugeData = [
      {
        value: 75,
        name: 'Outage',
        title: {
          show: false,
        },
        detail: {
          show: false,
        },
      },
    ];

    option1 = {
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: -180,
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: '#6147DC',
            },
          },
          axisLine: {
            lineStyle: {
              width: 20,
            },
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            distance: 50,
          },
          data: gaugeData,
          title: {
            fontSize: 14,
          },
          detail: {
            width: 50,
            height: 14,
            fontSize: 14,
            color: 'inherit',
            borderColor: 'inherit',
            borderRadius: 20,
            borderWidth: 1,
            formatter: '{value}%',
          },
        },
      ],
    };

    option1 && myChart1.setOption(option1);
  }
}
