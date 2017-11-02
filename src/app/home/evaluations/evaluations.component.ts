import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DialogAssessComponent } from '../dialog-assess';

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
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogAssessComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogAssessComponent>containerRef.createComponent(componentFatory).instance;
  }
}
