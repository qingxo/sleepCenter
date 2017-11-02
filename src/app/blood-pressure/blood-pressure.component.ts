import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, Renderer, ElementRef, ViewChild } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
import { BloodPressureService } from './blood-pressure.service';
import storage from '../shared/storage';
import * as moment from 'moment';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.scss'],
  providers: [BloodPressureService]
})
export class BloodPressureComponent implements OnInit, OnChanges {
  private sources = '';
  private option: EChartOption;
  private bloodPressureList: Array<any> = [];
  private bloodPressureDate: Array<any> = [];
  private heartRateValue: Array<any> = [];
  private bloodPressureHigh: Array<any> = [];
  private bloodPressureLower: Array<any> = [];
  private nothingFlag = false;
  @Input() userId = '';
  @Input() periodDay = 1;
  @Input() echartsStyle: any = { 'height': '350px' };

  @ViewChild('tt') el: ElementRef;
  constructor(private bloodPressureService: BloodPressureService, private render: Renderer) { }

  ngOnInit() {


    // this.bloodDataInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.userId != '') {
      this.bloodDataInit();
    }
  }



  bloodDataInit() {
    this.bloodPressureList = [];
    this.bloodPressureDate = [];
    this.heartRateValue = [];
    this.bloodPressureHigh = [];
    this.bloodPressureLower = [];
    this.nothingFlag = false;
    const data = {
      signType: 'bp',
      customerId: this.userId
    };
    this.bloodPressureService.getBloodPressList(data).subscribe((res) => {
      if (res.success) {
        this.bloodPressureList = res.data;
        // if (this.bloodPressureList instanceof Array) {
        for (let i = 0; i < this.bloodPressureList.length; i++) {
          this.bloodPressureHigh[i] = this.bloodPressureList[i].sbp;
          this.bloodPressureLower[i] = this.bloodPressureList[i].dbp;
          this.heartRateValue[i] = this.bloodPressureList[i].pulse;
          if (this.periodDay === 1) {
            this.bloodPressureDate[i] = moment(this.bloodPressureList[i].occurDt).format('HH:mm');
          } else {
            this.bloodPressureDate[i] = moment(this.bloodPressureList[i].occurDt).format('YYYY-MM-DD');
          }
        }
        // }

        if (this.bloodPressureList.length > 0) {
          this.nothingFlag = true;
          this.el.nativeElement.className = '';
        } else {
          this.nothingFlag = false;
          this.el.nativeElement.className = 'black-hole';

        }
        this.startEchartPress();
      }
    });
  }

  startEchartPress() {
    this.option = {
      title: {
        text: '血压监测',
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
        data: [
          '舒张压', '收缩压', '心率'
        ],
        right: '2%'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.bloodPressureDate
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} '
        }
      },
      series: [
        {
          name: '舒张压',
          type: 'line',
          data: this.bloodPressureLower,
          markLine: {
            data: [
              {
                yAxis: '140',
                name: '最高值'
              }, {
                yAxis: '90',
                name: '最低值'
              }
            ]
          }
        }, {
          name: '收缩压',
          type: 'line',
          data: this.bloodPressureHigh
        }, {
          name: '心率',
          type: 'line',
          data: this.heartRateValue
        }
      ]
    };
  }

}
