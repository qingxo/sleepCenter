import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, Renderer, ElementRef, ViewChild } from '@angular/core';
import { EChartOption } from 'echarts-ng2';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.scss']
})
export class Test4Component implements OnInit {
  option: EChartOption;
  option2: EChartOption;
  @Input() echartsStyle: any = { 'height': '430px', 'width': '100%' };

  @ViewChild('tt') el: ElementRef;
  constructor() { }

  ngOnInit() {


    this.option2 = {
      title: {
        text: '睡眠障碍疾病近3年发病率对比'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      grid: {
        left: '2%',
        bottom: '18%',
        containLabel: true
      },
      color: ['#a50ae0', '#05bbcc', '#0c2e08'],
      legend: {
        data: ['2014', '2015', '2016']
      },
      xAxis: [
        {
          type: 'category',
          data: ['慢性失眠', '短期失眠', '柱塞性睡眠呼吸障碍', '中枢性睡眠呼吸障碍', '睡眠相关肺泡低通气障碍',
            'REM相关异态睡眠', '不宁腿综合征', '睡眠不足综合征', '睡眠清醒时相延迟障碍', '睡眠清醒时相前移障碍',
            '睡眠相关低氧血症', '觉醒障碍', '睡眠相关性头痛', '睡眠相关磨牙症'],
          axisPointer: {
            type: 'shadow'
          },
          axisLabel: {
            interval: 0,
            rotate: 40
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '',
          min: 0,
          max: 100,
          interval: 10,
          axisLabel: {
            formatter: '{value} %'
          }
        }
      ],
      series: [
        {
          name: '2014',
          type: 'line',
          data: [22, 8, 22, 90, 11, 55, 22, 44, 99, 9, 33, 25, 44, 90.2]
        },
        {
          name: '2015',
          type: 'line',
          data: [70, 30, 20, 22, 70, 50, 10, 60, 40, 80, 87, 22, 11, 49]
        },
        {
          name: '2016',
          type: 'line',
          data: [20, 10, 20, 10, 70, 50, 40, 10, 10, 80, 89, 22, 11, 49]
        }

      ]
    }






    this.option = {
      title: {
        text: '睡眠障碍疾病发病率'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      grid: {
        left: '2%',
        bottom: '18%',
        containLabel: true
      },
      color: ['#a50ae0', '#05bbcc'],
      legend: {
        data: ['疾病概率', '病人数']
      },
      xAxis: [
        {
          type: 'category',
          data: ['慢性失眠', '短期失眠', '柱塞性睡眠呼吸障碍', '中枢性睡眠呼吸障碍', '睡眠相关肺泡低通气障碍',
            'REM相关异态睡眠', '不宁腿综合征', '睡眠不足综合征', '睡眠清醒时相延迟障碍', '睡眠清醒时相前移障碍',
            '睡眠相关低氧血症', '觉醒障碍', '睡眠相关性头痛', '睡眠相关磨牙症'],
          axisPointer: {
            type: 'shadow'
          },
          axisLabel: {
            interval: 0,
            rotate: 40
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '概率',
          min: 0,
          max: 100,
          interval: 10,
          axisLabel: {
            formatter: '{value} %'
          }
        },
        {
          type: 'value',
          name: '人数',
          min: 0,
          max: 1000,
          interval: 100,
          axisLabel: {
            formatter: '{value} '
          }
        }
      ],
      series: [
        {
          name: '疾病概率',
          type: 'line',
          data: [22, 8, 22, 90, 11, 55, 22, 44, 99, 9, 33, 25, 44, 90.2]
        },
        {
          name: '病人数',
          type: 'bar',
          yAxisIndex: 1,
          data: [100, 300, 200, 220, 870, 550, 220, 660, 240, 80, 87, 22, 121, 549]
        }

      ]
    }
  }

}
