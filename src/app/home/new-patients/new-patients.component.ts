import { Component, OnInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-new-patients',
  templateUrl: './new-patients.component.html',
  styleUrls: ['./new-patients.component.scss']
})
export class NewPatientsComponent implements OnInit, OnChanges {

  @Input() imageType: number = 0;
  @Input() list: Array<any> = [0, 0, 0];
  cmpImage: Array<string> = [];
  imageList: Array<string> = ['/assets/images/new-patient.png', '/assets/images/outpatient.png', '/assets/images/in-hospital.png', '/assets/images/out-hospital.png']
  imageList2: Array<string> = ['/assets/images/home1.png', '/assets/images/call-somebody.svg', '/assets/images/done.png', '/assets/images/error.png']
  wordList: Array<string> = ['新增患者', '门诊', '住院', '出院'];
  wordList2: Array<string> = ['随访', '待随访', '已完成', '异常任务']
  world: Array<string> = []
  constructor() {
    this.cmpImage = this.imageList;
    this.world = this.wordList;
  }

  ngOnInit() {
  }


  ngOnChanges(change: SimpleChanges) {
    if (change['imageType']) {
      if (this.imageType == 0) {
        this.cmpImage = []
        this.cmpImage = Array.from(this.imageList)
      } else {
        this.cmpImage = new Array(...this.imageList2)
        this.world = Array.from(this.wordList2)
      }
    }
  }

}
