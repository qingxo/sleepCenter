import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import {DialogHmmsmComponent} from "../dialog-hmmsm";

@Component({
  selector: 'app-hm-msm',
  templateUrl: './hm-msm.component.html',
  styleUrls: ['./hm-msm.component.scss']
})
export class HmMsmComponent implements OnInit {

  itemOptions = [
    { value: '1', label: '血压' },
    { value: '2', label: '血糖' },
    { value: '3', label: '血氧' }
  ];
  mItemOption = [ this.itemOptions[ 0 ] ];

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
