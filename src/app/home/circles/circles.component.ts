import { Component, OnInit, Input, Output, SimpleChanges, Renderer, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent implements OnInit, OnChanges {

  option: EChartOption;
  nothingFlag = false;
  echartsStyle: Object = { 'height': '180px' };
  @Input() topTitle = ['正常', '异常'];
  @Input() name = '测试';
  @Input() imageSrc = '/assets/images/evaluate.png';
  @Input() dataSeries: Array<any> = [];
  @ViewChild('tt') el: ElementRef;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.topTitle.length > 0 && this.dataSeries.length > 0) {
      this.finishOptionData();
    }
  }

  finishOptionData() {
    const tmp = this.getOption();
    for (let i = 0; i < this.topTitle.length; i++) {
      tmp.series[0]['data'].push({ value: this.dataSeries[i], name: this.topTitle[i] });
    }
    tmp.legend.top = 45 - tmp.series[0]['data'].length * 6 + '%';
    this.option = tmp;
  }

  getOption() {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      color: ['#3D70E4', '#9879FF', '#00C7FE', '#FF955F'],
      legend: {
        orient: 'vertical',
        right: '26%',
        top: '30%',
        itemGap: 15,
        data: this.topTitle
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '60%'],
          center: ['20%', '50%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '14',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          }, data: []
        }
      ]
    };
  }


}
