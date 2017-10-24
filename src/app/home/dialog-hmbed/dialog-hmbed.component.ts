import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-hmbed',
  templateUrl: './dialog-hmbed.component.html',
  styleUrls: ['./dialog-hmbed.component.scss']
})
export class DialogHmbedComponent implements OnInit {

  isVisibleBind = false;
  showModalBind = () => {
    this.isVisibleBind = true;
  }

  handleOkBind = (e) => {
    console.log('点击了确定');
    this.isVisibleBind = false;
  }

  handleCancelBind = (e) => {
    console.log(e);
    this.isVisibleBind = false;
  }

  itemOptions = [
    { value: '1', label: '智能床' },
    { value: '2', label: '智能枕' }
  ];
  mItemOption = [ this.itemOptions[ 1 ] ];

  constructor() { }

  ngOnInit() {
    this.showModalBind();
  }

}
