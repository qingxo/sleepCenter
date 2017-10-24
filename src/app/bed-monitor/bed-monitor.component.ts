import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bed-monitor',
  templateUrl: './bed-monitor.component.html',
  styleUrls: ['./bed-monitor.component.scss']
})
export class BedMonitorComponent implements OnInit {

  timeList: Array<any> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  heartList: Array<any> = [88, 93, 22, 44, 62, 22, 78, 83, 67, 76, 80, 88, 78, 77, 66, 90]
  breathList: Array<any> = [16, 18, 16, 12, 20, 22, 17, 15, 18, 19, 20, 22, 25, 26, 19, 18]
  moveList: Array<any> = [4, 5, 22, 90, 120, 212, 200, 180, 90, 40, 30, 20, 22, 24, 30, 22]
  heartLegendList: Array<any> = ['心率']
  breathLegendList: Array<any> = ['呼吸率']
  moveLegendList: Array<any> = ['体动值']

  constructor() { }

  ngOnInit() {
  }

}
