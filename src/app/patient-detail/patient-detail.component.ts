import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  tabs: Array<any> = [{ name: '基本信息' }, { name: '诊疗信息' }, { name: '体征监测' }, { name: '睡眠监测' }, { name: '睡眠报告' }]
  showIndex: number = 0;
  constructor() { }

  ngOnInit() {
  }

  tabShow(tab, index) {
    this.showIndex = index;
  }

}
