import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DialogEvaluationComponent } from '../dialog-evaluation'

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss']
})
export class EvaluationsComponent implements OnInit {

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
