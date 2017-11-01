import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicalDetailService } from "./medical-detail.service";
import * as moment from 'moment';
import * as $ from 'jquery';
import * as swal from 'sweetalert';
@Component({
  selector: 'app-medical-detail',
  templateUrl: './medical-detail.component.html',
  styleUrls: ['./medical-detail.component.scss'],
  providers: [MedicalDetailService]
})
export class MedicalDetailComponent implements OnInit {

  tabsIndex: number = 0;
  tabs: Array<any> = [{ name: '床用体征监测' }, { name: '睡眠障碍评估' }, { name: 'PSG睡眠监测' }]
  pdfSrc: string = '/assets/pdf/test.pdf';
  customerId: string = '';
  time: string = moment(new Date()).format('YYYY-MM-DD');
  recordTime: string = moment(new Date()).format('YYYY-MM-DD');
  type: number = 0;
  tplList: Array<string> = [];
  sleepDisordersAssessmentId: string = '';
  sleepMonitorId: string = '';
  syndrome: string = '0';
  typeId: string = '0';
  orderOfSeverity: string = '0';
  lowBloodOxygen: string = '0';
  sleepStatus: string = '0';
  sleepPosition: string = '0';
  remark: string = "";
  constructor(private route: ActivatedRoute, private medicalDetailService: MedicalDetailService) { }

  ngOnInit() {
    this.customerId = this.route.snapshot.params['customerId'];
    this.initRecords()
  }

  initRecords() {
    this.medicalDetailService.getRecordTpl().subscribe((res) => {
      if (res.data) {
        this.tplList = res.data;
      }
    })
  }

  typeChange(num) {
    this.type = num;
  }


  showTpl(index) {
    this.tabsIndex = index;
    if (this.tabsIndex === 2) {
      this.getPDF()
    }
  }

  getPDF() {
    let data = {
      customerId: this.customerId,
      simple: 'simple',
      startDate: this.time,
      endDate: this.time

    }
    this.medicalDetailService.getPdf(data).subscribe((res) => {

    })
  }

  getReportTime(time) {
    this.time = moment(time).format('YYYY-MM-DD');
  }

  recordsTime(time) {
    this.recordTime = time;
  }

  saveRecord() {
    let data = {
      customerId: this.customerId,
      bedMonitorTime: this.time,
      syndrome: this.syndrome,
      type: this.typeId,
      orderOfSeverity: this.orderOfSeverity,
      lowBloodOxygen: this.lowBloodOxygen,
      sleepStatus: this.sleepStatus,
      sleepPosition: this.sleepPosition,
      remark: this.remark,
      docName: '赵医生'
    }
    this.medicalDetailService.saveRecord(data).subscribe((res) => {
      if (res.success) {
        swal('保存成功', '', 'success');
      }
    })
  }

  hasClick(e) {
    this.remark += $(e.target).siblings('span').text()
  }

}
