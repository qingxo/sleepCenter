import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, Renderer, ElementRef, ViewChild } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
import { BloodSugarService } from './blood-sugar.service';
import * as moment from 'moment';
@Component({
  selector: 'app-blood-sugar',
  templateUrl: './blood-sugar.component.html',
  styleUrls: ['./blood-sugar.component.scss'],
  providers: [BloodSugarService]
})
export class BloodSugarComponent implements OnInit, OnChanges {

  bloodSugarListAfter: Array<any> = [];
  bloodSugarListBefore: Array<any> = [];
  nothingFlag = false;
  bloodSugarDateBefore: Array<any> = [];
  bloodSugarDateAfter: Array<any> = [];
  option: EChartOption;
  @Input() userId = '';
  @Input() periodDay = 1;
  @Input() echartsStyle: any = { 'height': '350px' };
  @ViewChild('tt') el: ElementRef;
  constructor(private bloodSugarService: BloodSugarService) { }

  ngOnInit() {
    // this.bloodDataInit();
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.bloodDataInit();
  }


  bloodDataInit() {
    const data = {
      signType: 'bg',
      customerId: this.userId
    };
    this.bloodSugarService.getBloodSugarList(data).subscribe((res) => {
      if (res.success) {
        const arr = res.data;
        this.bloodSugarDateBefore = [];
        this.bloodSugarDateAfter = [];
        this.bloodSugarListAfter = [];
        this.bloodSugarListBefore = [];

        if (arr instanceof Array) {
          for (let i = 0; i < arr.length; i++) {
            if (arr[i].bgPeriod.trim() == 0) {
              // 餐前
              this.bloodSugarListBefore.push(arr[i].bg);
              if (this.periodDay === 1) {
                this.bloodSugarDateBefore.push(moment(arr[i].occurDt).format('HH:mm'));
              } else {
                this.bloodSugarDateBefore.push(moment(arr[i].occurDt).format('YYYY-MM-DD'));
              }
            } else {
              this.bloodSugarListAfter.push(arr[i].bg);
              if (this.periodDay === 1) {
                this.bloodSugarDateAfter.push(moment(arr[i].occurDt).format('HH:mm'));
              } else {
                this.bloodSugarDateAfter.push(moment(arr[i].occurDt).format('YYYY-MM-DD'));
              }
            }
          }
        }

        if (this.bloodSugarListBefore.length === 0 && this.bloodSugarListAfter.length === 0) {
          this.nothingFlag = false;
          this.el.nativeElement.className = 'black-hole';

        } else {
          this.startEchartSugar();
          this.nothingFlag = true;
          this.el.nativeElement.className = '';
        }

      }
    });
  }

  startEchartSugar() {
    this.option = {
      color: [
        '#5793f3', '#d14a61', '#675bba'
      ],
      title: {
        text: '血糖监测',
        textStyle: {
          fontSize: '14'
        },
        top: '2%',
        left: '2%'
      },
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: [
          '餐前血糖', '餐后血糖'
        ],
        right: '2%'
      },
      grid: {
        top: 70,
        bottom: 50
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#d14a61'
            }
          },
          axisPointer: {
            label: {
              formatter: function(params) {
                return '餐后血糖  ' + params.value + (params.seriesData.length
                  ? '：' + params.seriesData[0].data
                  : '');
              }
            }
          },
          data: this.bloodSugarDateAfter
        }, {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#5793f3'
            }
          },
          axisPointer: {
            label: {
              formatter: function(params) {
                return '餐前血糖  ' + params.value + (params.seriesData.length
                  ? '：' + params.seriesData[0].data
                  : '');
              }
            }
          },
          data: this.bloodSugarDateBefore
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '餐前血糖',
          type: 'line',
          xAxisIndex: 1,
          smooth: true,
          data: this.bloodSugarListBefore
        }, {
          name: '餐后血糖',
          type: 'line',
          smooth: true,
          data: this.bloodSugarListAfter
        }
      ]
    };

  }
}
