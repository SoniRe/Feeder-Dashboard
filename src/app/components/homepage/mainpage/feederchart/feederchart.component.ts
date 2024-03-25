import { Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-feederchart',
  standalone: true,
  imports: [],
  templateUrl: './feederchart.component.html',
  styleUrl: './feederchart.component.css',
})
export class FeederchartComponent {
  @ViewChild('myPieChart') chartDom!: ElementRef;
  ngAfterViewInit() {
    var myChart = echarts.init(this.chartDom.nativeElement);
    var option;
    option = {
      color: ['#7FFC8B', '#F9FC7F', '#FC7F7F'],
      tooltip: {
        trigger: 'item',
      },
      legend: {
        // orient: 'vertical',
        // x: 'right',
        // y: 'center',
        show: false,
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['60%', '100%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: false,
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 18000, name: 'Online Feeders' },
            { value: 7000, name: 'Modem Disconnected' },
            { value: 1308, name: 'Offline Feeders' },
          ],
        },
      ],
    };
    option && myChart.setOption(option);
  }
}
