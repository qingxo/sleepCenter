import { Component, OnInit } from '@angular/core';
import { PatientSubjectService } from './patient-subject.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-patient-subject',
  templateUrl: './patient-subject.component.html',
  styleUrls: ['./patient-subject.component.scss'],
  providers: [PatientSubjectService]
})
export class PatientSubjectComponent implements OnInit {

  customerName: string = '';
  cardId: string = '';
  mobile: string = '';
  list: Array<any> = [];
  childList: Array<any> = [];
  constructor(private patientSubjectService: PatientSubjectService) { }

  ngOnInit() {
    this.showList()
  }

  searchInfo(e) {
    this.showList()
  }

  showList() {
    let data = { name: this.customerName, moible: this.mobile, cardId: this.cardId }
    this.patientSubjectService.getList(data).subscribe((res) => {
      if (res.data) {
        this.list = res.data;
      }
    })
  }

  showDetail(e, name) {
    let tmp = e.target.className
    console.log(tmp)
    let [a, b] = tmp.toString().split(' ')
    console.log(a, b)
    if (b == 'icons-plus') {
      $(e.target).removeClass('icons-plus').addClass('icons-minus')
      this.showInnerTable(false, e.target)
      this.showChildDetail(name)
    } else {
      $(e.target).addClass('icons-plus').removeClass('icons-minus')
      this.showInnerTable(true, e.target)

    }
  }

  showChildDetail(name) {
    this.patientSubjectService.getDetailList({ name: name }).subscribe((res) => {
      if (res.data) {
        this.childList = res.data
      }
    })
  }


  showInnerTable(flag, target) {
    if (flag) {
      $(target).parents('tr').next().css('display', 'none')
    } else {
      $(target).parents('tr').next().css('display', '')

    }
  }

}
