import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, Renderer, ElementRef, ViewChild } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.scss']
})
export class Test5Component implements OnInit {
  option: EChartOption;

  @Input() echartsStyle: any = { 'height': '430px', 'width': '100%' };

  @ViewChild('tt') el: ElementRef;

  constructor() { }

  ngOnInit() {
    this.option = {
      title: {
        text: '各类睡眠障碍疾病性别分布'
      },
      color: ['#3D70E4', '#9879FF'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {

        data: ['男', '女']
      },
      grid: {
        left: '3%',
        right: '6%',
        bottom: '18%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['慢性失眠', '短期失眠', '阻塞性慢性呼吸障碍',
            '中枢性睡眠呼吸障碍', '睡眠相关肺泡低通气障碍',
            'REM相关异态睡眠', '不宁腿综合征',
            '睡眠不足综合征', '睡眠清醒时相延迟障碍', '睡眠清醒时相前移障碍',
            '睡眠相关低氧血症', '觉醒障碍', '睡眠相关性头痛', '睡眠相关性磨牙症'],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            rotate: 40
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '男',
          type: 'bar',
          barGap: '15%',
          data: [10, 52, 200, 334, 390, 330, 220, 90, 22, 45, 99, 290, 29, 8]
        },
        {
          name: '女',
          type: 'bar',
          data: [200, 30, 100, 234, 25, 90, 120, 66, 8, 33, 67, 100, 8, 2],
          barCategoryGap: '70%'

        }
      ]

    }
  }


}
