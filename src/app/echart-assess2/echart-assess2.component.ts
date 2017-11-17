import { Component, OnInit, Input, Output, SimpleChanges, Renderer, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
import { EchartAssess2Service } from './echart-assess2.service';
import * as moment from 'moment';
@Component({
  selector: 'app-echart-assess2',
  templateUrl: './echart-assess2.component.html',
  styleUrls: ['./echart-assess2.component.scss'],
  providers: [EchartAssess2Service]
})
export class EchartAssess2Component implements OnInit, OnChanges {

  option: EChartOption;
  nothingFlag = false;
  list: Array<string> = [];
  @Input() type = '';
  @Input() topTitle = '';
  @Input() serisesData: Array<any> = [];
  @Input() echartsStyle: any = { 'width': '100%', 'height': '400px' };
  @Input() name = '测试';
  @Input() imageSrc = 'xxx';
  @Input() cid = '';
  @Input() dateTime: any;
  @ViewChild('tt') el: ElementRef;
  constructor(private echartAssess2Service: EchartAssess2Service) { }
  dataAxis = ['09/20', '09/21', '09/22', '09/23', '09/24', '09/25', '09/26'];
  data = [70, 123, 100, 30, 150, 92, 86];
  yMax = 500;
  dataShadow = [];
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.cid !== '') {
      this.getServiceList();
    }
  }

  getServiceList() {
    const data = {
      customerId: this.cid
    };
    this.echartAssess2Service.getList(data).subscribe((res) => {
      if (res.success) {
        this.list = res.data;
        this.list = this.list.reverse();
        this.data = [];
        this.dataAxis = [];
        for (let i = 0; i < this.list.length; i++) {
          if (this.type == 'PSQI') {
            this.data.push(this.list[i]['psqivalue']);
          } else if (this.type == 'GAD7') {
            this.data.push(this.list[i]['gad7Value']);
          } else if (this.type == 'PHQ9') {
            this.data.push(this.list[i]['phq9Value']);
          }
          this.dataAxis.push(moment(this.list[i]['evaluateTime']).format('YYYY-MM-DD'));
        }
        this.option = this.getOption();
      }
    });
  }

  getOption() {
    const opt = {
      legend: {
        show: true
      },
      xAxis: {
        data: this.dataAxis,
        axisLabel: {
          inside: false,
          textStyle: {
            color: '#888'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        min: 0,
        max: 'dataMax',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#a5a5a5'
          }
        },
        splitLine: {
          lineStyle: {
            color: ['#ccc'],
            type: 'dashed'
          }
        }
      },
      series: [
        { // For shadow
          type: 'bar',
          itemStyle: {
            normal: { color: 'rgba(0,0,0,0.5)' }
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: this.dataShadow,
          animation: false
        },
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#7ACC5A',
              barBorderRadius: [30, 30, 0, 0]
            },
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#6F7B91'
            }
          },
          data: this.data
        }
      ]
    };
    return opt;

  }

}
