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
    } else {
      $(e.target).addClass('icons-plus').removeClass('icons-minus')

    }
  }

}
