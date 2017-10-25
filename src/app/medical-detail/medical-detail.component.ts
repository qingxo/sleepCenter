import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-detail',
  templateUrl: './medical-detail.component.html',
  styleUrls: ['./medical-detail.component.scss']
})
export class MedicalDetailComponent implements OnInit {

  tabsIndex: number = 0;
  tabs: Array<any> = [{ name: '床用体征监测' }, { name: '睡眠障碍评估' }, { name: 'PSG睡眠监测' }]
  pdfSrc: string = '/assets/pdf/test.pdf';
  constructor() { }

  ngOnInit() {
  }

  showTpl(index) {
    this.tabsIndex = index;
  }

  getReportTime(time) {
    console.log(time)
  }

}
