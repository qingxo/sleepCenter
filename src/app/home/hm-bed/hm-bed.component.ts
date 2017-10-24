import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import {DialogHmbedComponent} from "../dialog-hmbed";

@Component({
  selector: 'app-hm-bed',
  templateUrl: './hm-bed.component.html',
  styleUrls: ['./hm-bed.component.scss']
})
export class HmBedComponent implements OnInit {

  selectedDept;
  deptOptions = [];
  selectedWard;
  wardOptions = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  searchDept(searchText) {
  }
  searchWard(searchText) {
  }

  ngOnInit() {
  }

  showModalBind() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogHmbedComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogHmbedComponent>containerRef.createComponent(componentFatory).instance;
  }
}
