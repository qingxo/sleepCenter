import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, Renderer, ElementRef, ViewChild } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
@Component({
  selector: 'app-bar-line',
  templateUrl: './bar-line.component.html',
  styleUrls: ['./bar-line.component.scss']
})
export class BarLineComponent implements OnInit, OnChanges {
  private option: EChartOption;
  private nothingFlag = false;
  @Input() topTitle = '';
  @Input() serisesData: Array<any> = [];
  @Input() echartsStyle: any = { 'height': '230px' };
  @Input() name: string = '测试';
  @Input() imageSrc: string = "/assets/images/evaluate.png";
  @ViewChild('tt') el: ElementRef;
  @Input() normalList: Array<any> = [];
  @Input() abNormalList: Array<any> = [];
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(change: SimpleChanges) {
    if (this.normalList.length > 0 && this.abNormalList.length > 0) {
      this.initEcharts()
    }
  }



  initEcharts() {
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
        data: ['正常', '异常']
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
          data: ['血压', '血糖', '心率', '血氧', '体温', 'BMI'],
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
          name: '正常',
          type: 'bar',
          barGap: '15%',
          data: this.normalList,
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
          name: '异常',
          type: 'bar',

          data: this.abNormalList,
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
          barCategoryGap: '70%'
        }
      ]
    }
  }

}
