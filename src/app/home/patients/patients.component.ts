import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DialogConditionComponent } from '../dialog-condition'
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {

  }

  showModal() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogConditionComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogConditionComponent>containerRef.createComponent(componentFatory).instance;
  }

}
