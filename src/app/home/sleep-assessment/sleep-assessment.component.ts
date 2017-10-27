import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogEvaluationComponent } from '../dialog-evaluation';
import { SleepAssessmentService } from './sleep-assessment.service';

@Component({
  selector: 'app-sleep-assessment',
  templateUrl: './sleep-assessment.component.html',
  styleUrls: ['./sleep-assessment.component.scss'],
  providers: [SleepAssessmentService]
})
export class SleepAssessmentComponent implements OnInit {
  customerId: String = '';
  list: any = '';
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private sleepAssessmentService: SleepAssessmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.sleepAssessmentService.getList({}).subscribe((res) => {
      this.list = res.data;
    });
  }
  showModal() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogEvaluationComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogEvaluationComponent>containerRef.createComponent(componentFatory).instance;
  }
}
