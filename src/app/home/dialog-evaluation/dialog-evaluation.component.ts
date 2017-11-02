import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-evaluation',
  templateUrl: './dialog-evaluation.component.html',
  styleUrls: ['./dialog-evaluation.component.scss']
})
export class DialogEvaluationComponent implements OnInit {

  isVisible = false;
  role = '0';
  sex = 'F';
  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    console.log('点击了确定');
    this.isVisible = false;
    window.open('/evaluatequestionnaire');
    console.log(this.role);
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }


  constructor() { }
  ngOnInit() {
    this.showModal();
  }
}
