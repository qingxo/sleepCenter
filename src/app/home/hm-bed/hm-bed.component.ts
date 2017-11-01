import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DialogHmbedComponent } from "../dialog-hmbed";
import { HmBedService } from './hm-bed.service';

@Component({
  selector: 'app-hm-bed',
  templateUrl: './hm-bed.component.html',
  styleUrls: ['./hm-bed.component.scss'],
  providers: [HmBedService]
})
export class HmBedComponent implements OnInit {

  selectedDept;
  deptOptions = [];
  selectedWard;
  wardOptions = [];
  list: any = [];
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private hmBedService: HmBedService) { }

  searchDept(searchText) {
  }
  searchWard(searchText) {
  }

  ngOnInit() {
    this.getList();
  }
  getList() {
    this.hmBedService.getList({})
      .subscribe(res => {

      });
  }
  showModalBind() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogHmbedComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogHmbedComponent>containerRef.createComponent(componentFatory).instance;
  }
}
