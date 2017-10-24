import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sleep-monitor',
  templateUrl: './sleep-monitor.component.html',
  styleUrls: ['./sleep-monitor.component.scss']
})
export class SleepMonitorComponent implements OnInit {


  timeList: Array<any> = [1, 2, 3, 4, 5]
  heartList: Array<any> = [99, 22, 44, 62, 22]
  moveList: Array<any> = [5, 22, 234, 22, 22]
  circleRadios: Array<any> = [55, 25, 20]
  sleepListTime: Array<any> = [1, 2, 3, 4, 5]
  sleepListStatus: Array<any> = [1, 2, 0, 1, 2]
  bedListTime: Array<any> = [2, 3, 5, 6, 7]
  bedList: Array<any> = [2, 2, 0, 1, 0]
  @Input() dateShow: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
