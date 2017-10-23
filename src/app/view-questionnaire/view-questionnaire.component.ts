import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-view-questionnaire',
  templateUrl: './view-questionnaire.component.html',
  styleUrls: ['./view-questionnaire.component.scss']
})
export class ViewQuestionnaireComponent implements OnInit {

  tabs: Array<any> = [{ name: '基本信息' }, { name: '诊疗信息' }, { name: '体征监测' }, { name: '睡眠监测' }, { name: '睡眠报告' }]
  showIndex: number = 0;
  constructor() { }

  ngOnInit() {
  }

  
}
