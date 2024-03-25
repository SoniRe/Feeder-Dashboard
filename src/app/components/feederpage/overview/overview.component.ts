import { Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  @ViewChild('voltageRChart') chartDom1!: ElementRef;
  @ViewChild('voltageYChart') chartDom2!: ElementRef;
  @ViewChild('voltageBChart') chartDom3!: ElementRef;
  @ViewChild('readingKWHChart') chartDom4!: ElementRef;
  @ViewChild('currentRChart') chartDom5!: ElementRef;
  @ViewChild('currentYChart') chartDom6!: ElementRef;
  @ViewChild('currentBChart') chartDom7!: ElementRef;
  @ViewChild('readingKVAChart') chartDom8!: ElementRef;

  ngAfterViewInit() {
    var chartDom1 = this.chartDom1.nativeElement;
    var myChart1 = echarts.init(chartDom1);

    var chartDom2 = this.chartDom2.nativeElement;
    var myChart2 = echarts.init(chartDom2);

    var chartDom3 = this.chartDom3.nativeElement;
    var myChart3 = echarts.init(chartDom3);

    var chartDom4 = this.chartDom4.nativeElement;
    var myChart4 = echarts.init(chartDom4);

    var chartDom5 = this.chartDom5.nativeElement;
    var myChart5 = echarts.init(chartDom5);

    var chartDom6 = this.chartDom6.nativeElement;
    var myChart6 = echarts.init(chartDom6);

    var chartDom7 = this.chartDom7.nativeElement;
    var myChart7 = echarts.init(chartDom7);

    var chartDom8 = this.chartDom8.nativeElement;
    var myChart8 = echarts.init(chartDom8);

    var option: EChartsOption;

    option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false },
      },
      yAxis: {
        type: 'value',
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false },
      },
      series: [
        {
          data: [100, 232, 500, 434, 600, 500, 800],
          type: 'line',
          smooth: true,
          lineStyle: { width: 0 },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgb(255, 0, 135)' },
              { offset: 1, color: 'white' },
            ]),
          },
          showSymbol: false,
        },
      ],
    };

    option && myChart1.setOption(option);
    option && myChart2.setOption(option);
    option && myChart3.setOption(option);
    option && myChart4.setOption(option);
    option && myChart5.setOption(option);
    option && myChart6.setOption(option);
    option && myChart7.setOption(option);
    option && myChart8.setOption(option);
  }
}
