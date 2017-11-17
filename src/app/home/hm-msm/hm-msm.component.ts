import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DialogHmmsmComponent } from '../dialog-hmmsm';
import { HmMsmService } from './hm-msm.service';
import * as moment from 'moment';

@Component({
  selector: 'app-hm-msm',
  templateUrl: './hm-msm.component.html',
  styleUrls: ['./hm-msm.component.scss'],
  providers: [HmMsmService]
})
export class HmMsmComponent implements OnInit {

  itemOptions = [
    { value: '', label: '全部项目' },
    { value: 'bp', label: '血压' },
    { value: 'bg', label: '血糖' },
    { value: 'temp', label: '体温' },
    { value: 'bmi', label: 'BMI' },
    { value: 'spo2', label: '血氧' }
  ];
  mItemOption = [this.itemOptions[0]];

  query: any = {};
  list: any = [];
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private hmMsmService: HmMsmService) { }

  ngOnInit() {
    this.getList();
  }
  getList() {
    const query = {};
    Object.assign(query, this.query);
    if (query['startDate']) {
      query['startDate'] = moment(query['startDate']).format('YYYY-MM-DD');
    }
    if (query['endDate']) {
      query['endDate'] = moment(query['endDate']).format('YYYY-MM-DD');
    }
    // 项目类别
    if (this.mItemOption) {
      query['signType'] = this.mItemOption['value'];
    }

    this.hmMsmService.getListService(query)
      .subscribe(res => {
        this.list = res.data;
      });
  }
  showModalEx() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogHmmsmComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogHmmsmComponent>containerRef.createComponent(componentFatory).instance;
  }
}
