import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import {DialogHmmsmComponent} from "../home/dialog-hmmsm";


@Component({
  selector: 'app-sign-monitor',
  templateUrl: './sign-monitor.component.html',
  styleUrls: ['./sign-monitor.component.scss']
})
export class SignMonitorComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

  showModalEx() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogHmmsmComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogHmmsmComponent>containerRef.createComponent(componentFatory).instance;
  }

}
