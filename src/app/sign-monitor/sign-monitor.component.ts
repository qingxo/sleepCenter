import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DialogHmmsmComponent } from "../home/dialog-hmmsm";
import { ActivatedRoute } from '@angular/router';
import { SignMonitorService } from './sign-monitor.service';


@Component({
  selector: 'app-sign-monitor',
  templateUrl: './sign-monitor.component.html',
  styleUrls: ['./sign-monitor.component.scss'],
  providers: [SignMonitorService]
})
export class SignMonitorComponent implements OnInit {
  @Input() customerId = '';
  list: any = [];
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private signMonitorService: SignMonitorService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.customerId = this.route.snapshot.params['customerId']
    this.getAbnormalList()
  }
  getAbnormalList() {
    this.signMonitorService.getAbnormalList({
      customerId: this.customerId
    }).subscribe(res => {
      this.list = res.data
    });
  }
  showModalEx() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogHmmsmComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogHmmsmComponent>containerRef.createComponent(componentFatory).instance;
  }

}
