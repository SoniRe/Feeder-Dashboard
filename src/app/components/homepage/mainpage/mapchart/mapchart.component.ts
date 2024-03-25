import { Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { HttpClient } from '@angular/common/http';

var ROOT_PATH = 'https://echarts.apache.org/examples';
type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-mapchart',
  standalone: true,
  imports: [],
  templateUrl: './mapchart.component.html',
  styleUrl: './mapchart.component.css',
})
export class MapchartComponent {
  @ViewChild('chart') chartElement!: ElementRef;

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    const myChart = echarts.init(this.chartElement.nativeElement);
    myChart.showLoading();

    this.http
      .get(ROOT_PATH + '/data/asset/geo/USA.json')
      .subscribe((usaJson: any) => {
        echarts.registerMap('USA', usaJson, {
          Alaska: { left: -131, top: 25, width: 15 },
          Hawaii: { left: -110, top: 28, width: 5 },
          'Puerto Rico': { left: -76, top: 26, width: 2 },
        });

        const option = {
          geo: {
            map: 'USA',
            roam: true,
            itemStyle: { areaColor: '#e7e8ea' },
          },
          tooltip: {},
          legend: {},
          series: [
            this.randomPieSeries([-86.753504, 33.01077], 15),
            this.randomPieSeries([-116.853504, 39.8], 25),
            this.randomPieSeries([-99, 31.5], 30),
            this.randomPieSeries(
              +echarts.version.split('.').slice(0, 3).join('') > 540
                ? 'Maine'
                : [-69, 45.5],
              12
            ),
          ],
        };

        myChart.hideLoading();
        myChart.setOption(option);
      });
  }

  randomPieSeries(
    center: string | number[],
    radius: number
  ): echarts.PieSeriesOption {
    const data = ['A', 'B', 'C', 'D'].map((t) => {
      return {
        value: Math.round(Math.random() * 100),
        name: 'Category ' + t,
      };
    });
    return {
      type: 'pie',
      coordinateSystem: 'geo',
      tooltip: { formatter: '{b}: {c} ({d}%)' },
      label: { show: false },
      labelLine: { show: false },
      animationDuration: 0,
      radius,
      center,
      data,
    };
  }
}
