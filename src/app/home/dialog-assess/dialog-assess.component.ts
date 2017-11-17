import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PatientsService } from '../patients/patients.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dialog-assess',
  templateUrl: './dialog-assess.component.html',
  styleUrls: ['./dialog-assess.component.scss'],
  providers: [PatientsService]
})
export class DialogAssessComponent implements OnInit {
  patientList: any = [];
  isVisible = false;
  role = '0';
  sex = 'F';
  query: String = '';
  @Input() tplTitle: string = '新增评估';
  @Output() fired = new EventEmitter<any>();
  jumpType: number = 0;
  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    console.log('点击了确定');
    this.isVisible = false;
    const customerId = $('input[name="check"]:checked').val();
    if (this.jumpType === 0) {
      window.open('/evaluatequestionnaire/' + customerId);
    } else if (this.jumpType === 1) {
      window.open('/medicaldetail/' + customerId);

    }
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }


  constructor(private patientsService: PatientsService) { }
  ngOnInit() {
    this.getList();
    this.showModal();
  }

  // 住院病人
  getList() {
    const data = { status: 1 };
    if (this.query) {
      data['name'] = this.query;
    }
    this.patientsService.getList(data).subscribe(res => {
      this.patientList = res.data;
    });
  }

  searchInfo(info) {
    this.query = info;
    this.getList();
  }
}
