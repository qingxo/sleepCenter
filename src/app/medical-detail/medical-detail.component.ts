import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicalDetailService } from './medical-detail.service';
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

  tabsIndex = 0;
  tabs: Array<any> = [{ name: '床用体征监测' }, { name: '睡眠障碍评估' }, { name: 'PSG睡眠监测' }];
  pdfSrc = '/assets/pdf/test.pdf';
  customerId = '';
  time: string = moment(new Date()).format('YYYY-MM-DD');
  recordTime: string = moment(new Date()).format('YYYY-MM-DD');
  type = 0;
  tplList: Array<string> = [];
  sleepDisordersAssessmentId = '';
  sleepMonitorId = '';
  syndrome = '0';
  typeId = '0';
  orderOfSeverity = '0';
  lowBloodOxygen = '0';
  sleepStatus = '0';
  sleepPosition = '0';
  remark = '';
  constructor(private route: ActivatedRoute, private medicalDetailService: MedicalDetailService) { }

  ngOnInit() {
    this.customerId = this.route.snapshot.params['customerId'];
    this.initRecords();
  }

  initRecords() {
    this.medicalDetailService.getRecordTpl().subscribe((res) => {
      if (res.data) {
        this.tplList = res.data;
      }
    });
  }

  typeChange(num) {
    this.type = num;
  }


  showTpl(index) {
    this.tabsIndex = index;
    if (this.tabsIndex === 2) {
      this.getPDF();
    }
  }

  getPDF() {
    const data = {
      customerId: this.customerId,
      simple: 'simple',
      startDate: this.time,
      endDate: this.time

    };
    this.medicalDetailService.getPdf(data).subscribe((res) => {

    });
  }

  getReportTime(time) {
    this.time = moment(time).format('YYYY-MM-DD');
  }

  recordsTime(time) {
    this.recordTime = time;
  }

  saveRecord() {
    const data = {
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
    };
    this.medicalDetailService.saveRecord(data).subscribe((res) => {
      if (res.success) {
        this.remark = '';
        swal('保存成功', '', 'success');
      }
    });
  }

  hasClick(e) {
    this.remark += ($(e.target).siblings('span').text() + '\n')
  }
}
