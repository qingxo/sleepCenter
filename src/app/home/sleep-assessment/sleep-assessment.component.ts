import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogAssessComponent } from '../dialog-assess';
import { SleepAssessmentService } from './sleep-assessment.service';
import * as moment from 'moment';

@Component({
  selector: 'app-sleep-assessment',
  templateUrl: './sleep-assessment.component.html',
  styleUrls: ['./sleep-assessment.component.scss'],
  providers: [SleepAssessmentService]
})
export class SleepAssessmentComponent implements OnInit {
  customerId: String = '';
  list: any = [];
  query: any = {};
  _endTime = null;
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private sleepAssessmentService: SleepAssessmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    const query = {};
    Object.assign(query, this.query);

    if (query['startDate']) {
      query['startDate'] = moment(query['startDate']).format('YYYY-MM-DD');
    }
    if (query['endDate']) {
      query['endDate'] = moment(query['endDate']).format('YYYY-MM-DD');
    }
    this.sleepAssessmentService.getList(query).subscribe((res) => {
      this.list = res.data;
    });
  }

  showModal() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogAssessComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogAssessComponent>containerRef.createComponent(componentFatory).instance;
  }
}
