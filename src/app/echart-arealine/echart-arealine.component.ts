import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, Renderer, ElementRef, ViewChild } from '@angular/core';
import { EChartOption } from 'echarts-ng2';

@Component({
  selector: 'app-echart-arealine',
  templateUrl: './echart-arealine.component.html',
  styleUrls: ['./echart-arealine.component.scss']
})
export class EchartArealineComponent implements OnInit, OnChanges {

  private sources = '';
  private option: EChartOption;
  private nothingFlag = false;
  @Input() chartTitleText = '';
  @Input() seriesItemStyleColor = '#3D86E4';
  @Input('seriesAreaStyleList') seriesAreaStyleList: Array<any> = [{ offset: 0, color: '#D6DFF9' }, { offset: 1, color: '#FDFDFF' }];
  @Input('legendDataList') legendDataList: Array<any> = [];
  @Input('dataList') dataList: Array<any> = [];
  @Input('xAxisList') xAxisList: Array<any> = [];
  @Input() echartsStyle: any = { 'height': '350px' };
  @ViewChild('tt') el: ElementRef;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataList.length > 0 && this.xAxisList.length > 0) {
      this.nothingFlag = true;
      this.el.nativeElement.className = '';
      this.refreshAreaLineEcharts();
    } else {
      this.nothingFlag = false;
      this.el.nativeElement.className = 'black-hole';
    }
  }

  refreshAreaLineEcharts() {
    this.option = {
      title: {
        text: this.chartTitleText,
        textStyle: {
          fontSize: 14
          //color: '#FF945E'
        },
        top: '2%',
        left: '2%'
        //padding: [8, 16],
        //borderColor: '#FF945E',
        //borderWidth: 1,
        //borderRadius: 6
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
        data: this.xAxisList
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: this.legendDataList[0],
          type: 'line',
          smooth: false,
          symbol: 'none',
          //sampling: 'average',
          itemStyle: {
            normal: {
              color: this.seriesItemStyleColor
            }
          },
          areaStyle: {
            normal: {
              //color: new echarts.graphic.LinearGradient(0, 0, 0, 1, this.seriesAreaStyleList)
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: this.seriesAreaStyleList,
                globalCoord: false // 缺省为 false
              }
            }
          },
          data: this.dataList
        }
      ]
    };
  }

}
