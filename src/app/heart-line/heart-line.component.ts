import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, Renderer, ElementRef, ViewChild } from '@angular/core';
import { EChartOption } from 'echarts-ng2';

@Component({
  selector: 'app-heart-line',
  templateUrl: './heart-line.component.html',
  styleUrls: ['./heart-line.component.scss']
})
export class HeartLineComponent implements OnInit, OnChanges {
  sources = '';
  option: EChartOption;
  nothingFlag = false;
  @Input() chartTitleText = '';
  @Input('legendDataList') legendDataList: Array<any> = [];
  @Input('dataList') heartList: Array<any> = [];
  @Input('xAxisList') xHeatData: Array<any> = [];
  @Input() echartsStyle: any = { 'height': '350px' };
  @ViewChild('tt') el: ElementRef;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.heartList.length > 0 && this.xHeatData.length > 0) {
      this.nothingFlag = true;
      this.el.nativeElement.className = '';
      this.refreshHeartEcharts();
    } else {
      this.nothingFlag = false;
      this.el.nativeElement.className = 'black-hole';
    }

  }


  refreshHeartEcharts() {
    this.option = {
      title: {
        text: this.chartTitleText,
        textStyle: {
          fontSize: '14'
        },
        top: '2%',
        left: '2%'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: this.legendDataList,
        right: '9%'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.xHeatData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: this.legendDataList[0],
          type: 'line',
          data: this.heartList,
          symbolSize: 4,
          itemStyle: {
            normal: {
              color: '#2f78f9'
            }
          }
        }
      ]
    };
  }

}
