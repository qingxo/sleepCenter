import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit {

  @Input() name = '';
  @Input() timeFormat = 'YYYY-MM-DD';
  @Output() fired: EventEmitter<any> = new EventEmitter<any>();
  chooseDate: any = new Date();

  constructor() { }

  ngOnInit() {
  }

  dateChange() {
    console.log();
    const tmp = moment(this.chooseDate).format('YYYY-MM-DD');
    this.fired.emit(tmp);
  }

}
