import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DialogConditionComponent } from '../dialog-condition';
import { PatientsService } from './patients.service';
import * as moment from 'moment';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  providers: [PatientsService]
})
export class PatientsComponent implements OnInit {

  hospitalInfo: number = 0;
  list: any = [];
  moreInfo: any = null;
  patientName: string = '';
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private patientsService: PatientsService) { }

  ngOnInit() {
    this.refreshList();
  }

  searchInfo(info) {
    this.patientName = info;
    this.refreshList();
  }

  refreshList() {
    let data = {}
    if (this.moreInfo !== null) {
      Object.assign(data, this.moreInfo);
      if (data['startDate']) {
        data['startDate'] = moment(data['startDate']).format('YYYY-MM-DD');
      }
      if (data['endDate']) {
        data['endDate'] = moment(data['endDate']).format('YYYY-MM-DD');
      }
    }
    if (this.patientName != '') {
      data['name'] = this.patientName
    }

    data['status'] = this.hospitalInfo;

    this.patientsService.getList(data).subscribe((res) => {
      if (res.success) {
        this.list = res.data
      } else {
        this.list = []
      }
    })
  }

  firedInfo(num) {
    this.hospitalInfo = num;
    this.refreshList()
  }

  showModal() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogConditionComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogConditionComponent>containerRef.createComponent(componentFatory).instance;
    dd.initMoreInfo(this.moreInfo)
    dd.fired.subscribe((res) => {
      this.moreInfo = res;
      this.refreshList()
    })
  }

}
