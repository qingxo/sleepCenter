import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SleepMonitorService } from './sleep-monitor.service';
import * as moment from 'moment';
@Component({
  selector: 'app-sleep-monitor',
  templateUrl: './sleep-monitor.component.html',
  styleUrls: ['./sleep-monitor.component.scss'],
  providers: [SleepMonitorService]
})
export class SleepMonitorComponent implements OnInit, OnChanges {

  @Input() dateShow: boolean = false;
  @Input() reportDay: string = moment(new Date()).format('YYYY-MM-DD')
  heartLegendList: Array<any> = ['心率']
  moveLegendList: Array<any> = ['体动值']
  private customerId: string = '';
  private equipNo: string = '';
  private maxDay: string = moment(new Date()).format('YYYY-MM-DD');
  private list: any = {};
  private heartList: Array<any> = [];
  private moveList: Array<any> = [];
  private bedList: Array<any> = [];
  private timeList: Array<any> = [];
  private sleepListTime: Array<any> = [];
  private sleepListStatus: Array<any> = [];
  private sleepDeep: string = '0';
  private sleepLower: string = '0';
  private sleepNo: string = '0';
  private circleRadios: Array<any> = [];
  private bedListTime: Array<any> = [];

  constructor(private sleepMonitorService: SleepMonitorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.customerId = this.route.snapshot.params['customerId'];
    this.equipNo = '030500000045';
    this.callService();
  }

  ngOnChanges(change: SimpleChanges) {
    if (this.equipNo !== '') {
      this.callService()

    }
  }

  timeFired(num) {
    this.reportDay = num;
    this.callService()
  }

  callService() {
    this.sleepMonitorService.reportDetail(this.equipNo, this.reportDay).subscribe((res) => {
      this.list = res.json;

      this.initSleepRadio()
      this.bedAnalysisInit(res.sleep)
    })
    this.callReportSleepHeart()
    this.callReportSleepOnBed()
  }

  bedAnalysisInit(obj) {
    this.sleepListTime = []
    this.sleepListStatus = []
    let { status, time } = obj
    for (let item of status) {
      this.sleepListStatus.push(parseInt(item, 10))
    }
    this.sleepListTime = Array.from(time)
    this.sleepListStatus = Array.from(this.sleepListStatus)
  }

  initSleepRadio() {
    let [deep, lower, nos] = [this.list.deepminutes, this.list.lightminutes, this.list.wakeminutes]
    let sum = parseInt(deep, 10) + parseInt(lower, 10) + parseInt(nos, 10)
    this.sleepDeep = "" + Math.round((deep / sum) * 100);
    this.sleepLower = "" + Math.round((lower / sum) * 100);
    this.sleepNo = "" + Math.round((nos / sum) * 100);
    if (this.sleepDeep !== 'NaN' || this.sleepLower !== 'NaN' || this.sleepNo !== 'NaN') {
      this.circleRadios = [this.sleepDeep, this.sleepLower, this.sleepNo]
    } else {
      this.circleRadios = []
    }
  }


  callReportSleepHeart() {
    this.sleepMonitorService.reportSleepHeart(this.equipNo, this.reportDay).subscribe((res) => {
      this.heartList = [];
      this.moveList = [];
      this.timeList = [];
      if (res.success && res.data) {
        for (let i = 0; i < res.data.length; i++) {
          this.heartList.push(res.data[i]['avghr'])
          this.moveList.push(res.data[i]['avgmv'])
          this.timeList.push(res.data[i]['hour'])
        }
        this.heartList = Array.from(this.heartList);
        this.moveList = Array.from(this.moveList);
        this.timeList = Array.from(this.timeList);
      }
    })
  }

  callReportSleepOnBed() {
    this.sleepMonitorService.reportSleepOnBed(this.equipNo, this.reportDay).subscribe((res) => {
      this.bedList = [];
      this.bedListTime = [];
      for (let i = 0; i < res.data.length; i++) {
        this.bedList.push(parseInt(res.data[i]['status'], 10) - 1);
        this.bedListTime.push(res.data[i]['timespan']);
      }
    })
  }

}
