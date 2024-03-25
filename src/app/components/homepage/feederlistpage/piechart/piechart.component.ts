import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  numberAttribute,
} from '@angular/core';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-piechart',
  standalone: true,
  imports: [],
  templateUrl: './piechart.component.html',
  styleUrl: './piechart.component.css',
})
export class PiechartComponent {
  @Input() name = '';
  @Input({ transform: numberAttribute }) totalFeeder = '';
  @Input({ transform: numberAttribute }) activeFeeder = '';
  @Input({ transform: numberAttribute }) disconnectFeeder = '';
  @Input({ transform: numberAttribute }) downFeeder = '';

  @ViewChild('myFirstPieChart') chartDom1!: ElementRef;
  @ViewChild('mySecondPieChart') chartDom2!: ElementRef;
  @ViewChild('myThirdPieChart') chartDom3!: ElementRef;

  ngAfterViewInit() {
    var chartDom1 = this.chartDom1.nativeElement;
    var myChart1 = echarts.init(chartDom1);
    var data1 = [
      {
        value: 990,
        name: 'Active Feeder',
      },
    ];

    var chartDom2 = this.chartDom2.nativeElement;
    var myChart2 = echarts.init(chartDom2);
    var data2 = [
      {
        value: 102,
        name: 'Disconnect Feeder',
      },
    ];

    var chartDom3 = this.chartDom3.nativeElement;
    var myChart3 = echarts.init(chartDom3);
    var data3 = [
      {
        value: 40,
        name: 'Down Feeder',
      },
    ];

    var option: EChartsOption;

    option = {
      tooltip: {
        // trigger: 'item',
        show: false,
      },
      legend: {
        show: false,
        // bottom: '0%',
        // left: 'center',
      },
      series: [
        {
          name: 'Feeder List',
          type: 'pie',
          radius: ['0%', '100%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: false,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [],
        },
      ],
    };

    if (!Array.isArray(option.series)) {
      option.series = [];
    }

    option.series[0].data = data1;
    option.color = '#C084FC';
    myChart1.setOption(option);

    option.series[0].data = data2;
    option.color = '#2563EB';
    myChart2.setOption(option);

    option.series[0].data = data3;
    option.color = '#FB923C';
    myChart3.setOption(option);
  }
}
