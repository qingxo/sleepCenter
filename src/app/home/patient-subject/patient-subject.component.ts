import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-patient-subject',
  templateUrl: './patient-subject.component.html',
  styleUrls: ['./patient-subject.component.scss']
})
export class PatientSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showDetail(e) {
    let tmp = e.target.className
    console.log(tmp)
    let [a, b] = tmp.toString().split(' ')
    console.log(a, b)
    if (b == 'icons-plus') {
      $(e.target).removeClass('icons-plus').addClass('icons-minus')
      this.showInnerTable(false, e.target)
    } else {
      $(e.target).addClass('icons-plus').removeClass('icons-minus')
      this.showInnerTable(true, e.target)

    }
  }

  showInnerTable(flag, target) {
    if (flag) {
      $(target).parents('tr').next().css('display', 'none')
    } else {
      $(target).parents('tr').next().css('display', '')

    }
  }

}
