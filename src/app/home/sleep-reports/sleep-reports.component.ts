import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DialogAssessComponent } from '../dialog-assess';
import { SleepReportsService } from './sleep-reports.service';

@Component({
  selector: 'app-sleep-reports',
  templateUrl: './sleep-reports.component.html',
  styleUrls: ['./sleep-reports.component.scss'],
  providers: [SleepReportsService]
})
export class SleepReportsComponent implements OnInit {
  customerId: String = '';
  list: any = '';
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private sleepReportsService: SleepReportsService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    let data = { };
    if (this.customerId) {
      data['customerId'] = this.customerId;
    }
    this.sleepReportsService.getList(data).subscribe((res)=>{
      this.list = res.data;
    })
  }

  showModal() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogAssessComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogAssessComponent>containerRef.createComponent(componentFatory).instance;
  }
}
