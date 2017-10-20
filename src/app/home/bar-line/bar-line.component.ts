import { Component, OnInit, Input, Output, SimpleChanges, Renderer, ElementRef, ViewChild, AfterContentChecked } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
@Component({
  selector: 'app-bar-line',
  templateUrl: './bar-line.component.html',
  styleUrls: ['./bar-line.component.scss']
})
export class BarLineComponent implements OnInit {
  private option: EChartOption;
  private nothingFlag = false;
  @Input() topTitle = '';
  @Input() serisesData: Array<any> = [];
  @Input() echartsStyle: any = { 'height': '230px' };
  @Input() name: string = '测试';
  @Input() imageSrc: string = "/assets/images/evaluate.png";
  @ViewChild('tt') el: ElementRef;
  constructor() { }

  ngOnInit() {
    this.option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      color: ['#3D70E4', '#9879FF'],
      legend: {
        orient: 'veritcal',
        right: '10%',
        top: '45%',
        data: ['直接访问', '间接访问']
      },
      grid: {
        left: '3%',
        right: '20%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          },
          splitLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          data: [10, 52, 200, 334, 390, 330, 220],
          label: {
            normal: {
              show: true,
              color: '#6f7b91',
              position: 'top',
              textStyle: {
                fontSize: '12'
              }
            }
          },
          itemStyle: {
            normal: {
              barBorderRadius: [15, 15, 0, 0]
            }
          },
        }, {
          name: '间接访问',
          type: 'bar',
          data: [20, 12, 100, 304, 90, 30, 120],
          label: {
            normal: {
              show: true,
              color: '#6f7b91',
              position: 'top',
              textStyle: {
                fontSize: '12'
              }
            }
          },
          itemStyle: {
            normal: {
              barBorderRadius: [15, 15, 0, 0]
            }
          },
        }
      ]
    }
  }

}
