import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bed-monitor',
  templateUrl: './bed-monitor.component.html',
  styleUrls: ['./bed-monitor.component.scss']
})
export class BedMonitorComponent implements OnInit {

  timeList: Array<any> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  heartList: Array<any> = [88, 93, 22, 44, 62, 22, 78, 83, 67, 76, 80, 88, 78, 77, 66, 90, 85, 87, 80, 81, 70, 72, 21, 88];
  breathList: Array<any> = [16, 18, 16, 12, 20, 22, 17, 15, 18, 19, 20, 22, 25, 26, 19, 18, 16, 17, 19, 19, 20, 24, 22, 24];
  moveList: Array<any> = [4, 5, 22, 90, 120, 212, 200, 180, 90, 40, 30, 20, 22, 24, 30, 22, 22, 22, 22, 19, 20, 21, 22, 32];
  heartLegendList: Array<any> = ['心率'];
  breathLegendList: Array<any> = ['呼吸率'];
  moveLegendList: Array<any> = ['体动值'];
  heartSAStyleList: Array<any> = [{ offset: 0, color: '#D6DFF9' }, { offset: 1, color: '#FDFDFF' }];
  breathSAStyleList: Array<any> = [{ offset: 0, color: '#C3F2F2' }, { offset: 1, color: '#FEFDFF' }];

  // equipNo: String = '030500000045';
  equipNo = '030600000042';
  sources = 'A';
  constructor() { }

  ngOnInit() {
    this.getRealTimeDataTest();
  }
  getRealTimeDataTest() {
    setInterval(() => {
      if (this.timeList.length > 24) {
        this.timeList.shift();
        this.heartList.shift();
        this.breathList.shift();
        this.moveList.shift();
      }

      this.timeList.push(Number(Math.random() * 10).toFixed(0) + 1);
      this.heartList.push(Number(Number(Math.random() * 40).toFixed(0)) + 1);
      this.breathList.push(Number(Number(Math.random() * 20).toFixed(0)) + 1);
      this.moveList.push(Number(Number(Math.random() * 15).toFixed(0)) + 1);
      this.timeList = Array.from(this.timeList);

    }, 1000);
  }

  getRealTimeData() {
    let option = {};
    if (this.equipNo == '' || this.equipNo == null) {
      return;
    }
    if (this.sources == 'A') {
      option = {
        topics: [
          window['mqttHelper'].subscribeTopic.getSingleBcgData('' + this.equipNo), // 主题-体征数据（呼吸、心率）
          window['mqttHelper'].subscribeTopic.getSingleLeaveBedData('' + this.equipNo) // 主题-设备状态（设备状态：0，离床；1，在床；2，异常）
        ],
        dealData: (topic, data) => {
          console.log(data);
          this.livingData(data);
        }
      };
      window['mqttHelper'].connect(option);
    } else {
      window['sleepcareAPI'].beginReceiveData(this.equipNo, (res) => {
        this.livingData(res);
      });
    }

  }

  livingData(res) {
    console.log(res);
  }

}
