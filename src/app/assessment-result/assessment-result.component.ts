import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-assessment-result',
  templateUrl: './assessment-result.component.html',
  styleUrls: ['./assessment-result.component.scss']
})
export class AssessmentResultComponent implements OnInit {

  tabs: Array<any> = [{ name: '基本信息' }, { name: '诊疗信息' }, { name: '体征监测' }, { name: '睡眠监测' }, { name: '睡眠报告' }]
  showIndex: number = 0;
  constructor() { }

  ngOnInit() {
  }

  
}
