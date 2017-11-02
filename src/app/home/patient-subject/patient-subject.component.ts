import { Component, OnInit } from '@angular/core';
import { PatientSubjectService } from './patient-subject.service';
import * as $ from 'jquery';
import * as swal from 'sweetalert';
@Component({
  selector: 'app-patient-subject',
  templateUrl: './patient-subject.component.html',
  styleUrls: ['./patient-subject.component.scss'],
  providers: [PatientSubjectService]
})
export class PatientSubjectComponent implements OnInit {

  customerName = '';
  cardId = '';
  mobile = '';
  list: Array<any> = [];
  childList: Array<any> = [];
  constructor(private patientSubjectService: PatientSubjectService) { }

  ngOnInit() {
    this.showList();
  }

  searchInfo(e) {
    this.showList();
  }

  showList() {
    const data = { name: this.customerName, moible: this.mobile, cardId: this.cardId };
    this.patientSubjectService.getList(data).subscribe((res) => {
      if (res.data) {
        this.list = res.data;
      }
    });
  }

  showDetail(e, name) {
    const tmp = e.target.className;
    const [a, b] = tmp.toString().split(' ');
    this.showInnerTable(true, e.target);
    if (b == 'icons-plus') {
      $(e.target).removeClass('icons-plus').addClass('icons-minus');
      this.showChildDetail(name, e.target);
    } else {
      $(e.target).addClass('icons-plus').removeClass('icons-minus');
    }
  }

  showChildDetail(name, target) {
    this.patientSubjectService.getDetailList({ name: name }).subscribe((res) => {
      if (res.data) {
        this.childList = [];
        this.childList = res.data;
        if (this.childList.length > 0) {
          for (let i = 0; i < this.childList.length; i++) {
            this.childList[i]['isCk'] = false;
          }
          this.showInnerTable(false, target);
        }
      }
    });
  }

  makePullDown(num) {
    let cusId = '';
    for (let i = 0; i < this.childList.length; i++) {
      if (this.childList[i]['isCk']) {
        cusId = this.childList[i].customerId;
      }
    }
    if (cusId == '') {
      swal('请选择用户', '', 'warning');
      return;
    }

    const data = {
      customerId: cusId
    };
    this.patientSubjectService.pullDownData(data).subscribe((res) => {
      if (res) {
        swal('成功', '', 'success');
      }
    });
  }

  showInnerTable(flag, target) {
    if (flag) {
      $(target).parents('tr').siblings('.chr').addClass('no-show');
      $('.dot').removeClass('icons-minus').addClass('icons-plus');
    } else {
      $(target).parents('tr').siblings('.chr').addClass('no-show');
      $(target).removeClass('icons-plus').addClass('icons-minus');
      $(target).parents('tr').nextAll('.chr').eq(0).removeClass('no-show');
    }
  }

}
