import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DialogEvaluationComponent } from '../dialog-evaluation'

@Component({
  selector: 'app-sleep-reports',
  templateUrl: './sleep-reports.component.html',
  styleUrls: ['./sleep-reports.component.scss']
})
export class SleepReportsComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

  showModal() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogEvaluationComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogEvaluationComponent>containerRef.createComponent(componentFatory).instance;
  }
}
