import { Component, OnInit, Input, Output, SimpleChanges, Renderer, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
@Component({
  selector: 'app-circle-distribution',
  templateUrl: './circle-distribution.component.html',
  styleUrls: ['./circle-distribution.component.scss']
})
export class CircleDistributionComponent implements OnInit, OnChanges {

  option: EChartOption;
  nothingFlag = false;
  echartsStyle: Object = { 'height': '180px' };
  @Input() dataSeries: Array<any> = [];
  @Input() title: String = '';
  @Input() dataTitle: Array<any> = [];
  @Input() data: Array<any> = [];
  @ViewChild('tt') el: ElementRef;
  constructor() { }

  ngOnInit() {
    const data = [];
    for (let i = 0; i < this.dataTitle.length; i++) {
      data.push({ value: this.data[i], name: this.dataTitle[i] });
    }
    this.option = this.getOption(data);
  }

  ngOnChanges(changes: SimpleChanges) {
    //this.finishOptionData();

  }

  finishOptionData() {
    //const tmp = this.getOption();
    // for (let i = 0; i < this.topTitle.length; i++) {
    //   tmp.series[0]['data'].push({ value: this.dataSeries[i], name: this.topTitle[i] });
    // }
    // tmp.legend.top = 45 - tmp.series[0]['data'].length * 6 + '%';
    // this.option = tmp;
  }
  

  getOption(data) {
    return  {
      title : {
          text: this.title,
          x:'center'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      color: ['#3D70E4', '#9879FF', '#00C7FE', '#FF955F', '#768bef'],
      legend: {
          //orient: 'hi',
          left: 'center',
          top: 'bottom',
          data: this.dataTitle
      },
      series : [
          {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data: data,
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
  };
  }


}
