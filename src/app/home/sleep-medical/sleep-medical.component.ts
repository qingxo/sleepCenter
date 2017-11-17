import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DialogAssessComponent } from '../dialog-assess';
import { SleepMedicalService } from './sleep-medical.service';

@Component({
  selector: 'app-sleep-medical',
  templateUrl: './sleep-medical.component.html',
  styleUrls: ['./sleep-medical.component.scss'],
  providers: [SleepMedicalService]
})
export class SleepMedicalComponent implements OnInit {

  list: Array<any> = [];
  _startDate = '';
  _endDate = '';
  _endTime = null;
  _startValueChange = null;
  constructor(private sleepMedicalService: SleepMedicalService, private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.showList();
  }

  showList() {
    const data = {};
    this.sleepMedicalService.getList(data).subscribe((res) => {
      if (res.success) {
        this.list = res.data;
      }
    });
  }

  _endValueChange() {

  }

  _disabledStartDate = (startValue) => {

  };
  _disabledEndDate = (endValue) => {

  };

  makePaper() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogAssessComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogAssessComponent>containerRef.createComponent(componentFatory).instance;
    dd.tplTitle = '开具诊断名单';
    dd.jumpType = 1;
  }


}
