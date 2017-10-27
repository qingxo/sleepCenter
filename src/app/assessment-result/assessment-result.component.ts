import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssessmentResultService } from './assessment-result.service';

@Component({
  selector: 'app-assessment-result',
  templateUrl: './assessment-result.component.html',
  styleUrls: ['./assessment-result.component.scss'],
  providers: [AssessmentResultService]
})
export class AssessmentResultComponent implements OnInit {
  customerId: String = '';
  evaluateTime: String = '';
  tabs: Array<any> = [{ name: '基本信息' }, { name: '诊疗信息' }, { name: '体征监测' }, { name: '睡眠监测' }, { name: '睡眠报告' }]
  showIndex: number = 0;
  constructor(private route: ActivatedRoute, private assessmentResultService: AssessmentResultService) { }

  ngOnInit() {
    this.customerId = this.route.snapshot.params['customerId'];
    this.evaluateTime = this.route.snapshot.params['evaluateTime'];
    const data = {
      customerId: '1710241455273782625',
      evaluateTime: '2017-10-18'
    }
    this.getReportDetail(data);
  }

  getReportDetail(data) {
    this.assessmentResultService.getReportDetail(data).subscribe(res => {

    })
  }
  
}
