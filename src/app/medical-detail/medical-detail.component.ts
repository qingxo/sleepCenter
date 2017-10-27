import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicalDetailService } from "./medical-detail.service";
import * as moment from 'moment';
@Component({
  selector: 'app-medical-detail',
  templateUrl: './medical-detail.component.html',
  styleUrls: ['./medical-detail.component.scss'],
  providers: [MedicalDetailService]
})
export class MedicalDetailComponent implements OnInit {

  tabsIndex: number = 0;
  tabs: Array<any> = [{ name: '床用体征监测' }, { name: '睡眠障碍评估' }, { name: 'PSG睡眠监测' }]
  pdfSrc: string = 'http://127.0.0.1/api/WEB-INF/pdf/1710241455275556099_1505712778666.pdf';
  customerId: string = '';
  time: string = moment(new Date()).format('YYYY-MM-DD');
  type: number = 0;
  tplList: Array<string> = [];
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
      customerId: this.customerId
    }
    this.medicalDetailService.getPdf(data).subscribe((res) => {

    })
  }

  getReportTime(time) {
    this.time = moment(time).format('YYYY-MM-DD');
  }

}
