import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-hmmsm',
  templateUrl: './dialog-hmmsm.component.html',
  styleUrls: ['./dialog-hmmsm.component.scss']
})
export class DialogHmmsmComponent implements OnInit {

  isVisibleEx = false;
  showModalEx = () => {
    this.isVisibleEx = true;
  }

  handleOkEx = (e) => {
    console.log('点击了确定');
    this.isVisibleEx = false;
  }

  handleCancelEx = (e) => {
    console.log(e);
    this.isVisibleEx = false;
  }

  constructor() { }

  ngOnInit() {
    this.showModalEx();
  }

}
