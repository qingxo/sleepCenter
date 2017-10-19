import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DialogAccountComponent } from '../dialog-account'

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
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogAccountComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogAccountComponent>containerRef.createComponent(componentFatory).instance;
  }
}
