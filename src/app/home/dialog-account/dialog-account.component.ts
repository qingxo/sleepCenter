import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

// import { DialogCondition } from './conditions';
@Component({
  selector: 'app-dialog-account',
  templateUrl: './dialog-account.component.html',
  styleUrls: ['./dialog-account.component.scss']
})
export class DialogAccountComponent implements OnInit {

  isVisible = false;
  role = '0'
  sex = 'F'
  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    console.log('点击了确定');
    this.isVisible = false;
    console.log(this.role)
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }


  constructor() { }
  ngOnInit() {
    this.showModal()
  }
}
