import { Component, OnInit } from '@angular/core';
import { AgeDistributionService } from './age-distribution.service';
@Component({
  selector: 'app-age-distribution',
  templateUrl: './age-distribution.component.html',
  styleUrls: ['./age-distribution.component.scss'],
  providers: [AgeDistributionService]
})
export class AgeDistributionComponent implements OnInit {

  type = 0;
  data: any = {};
  newPatients: Array<any> = [];
  visitor: Array<any> = [];
  sleepAboutReport: Array<any> = [];
  psgReport: Array<any> = [];
  bedMonitor: Array<any> = [];
  normalList: Array<any> = [];
  abNormalList: Array<any> = [];
  constructor(private mainPageService: AgeDistributionService) { }

  ngOnInit() {
    this.getDataList();
  }

  firedInfo(num) {
    this.type = num;
    this.getDataList();
  }

  getDataList() {
    const data = {
      type: this.type
    };
    this.mainPageService.getList(data).subscribe((res) => {
      if (res) {
        this.data = res.data;
        this.newPatients = [];
        this.visitor = [];
        this.sleepAboutReport = [];
        this.psgReport = [];
        this.bedMonitor = [];
        this.normalList = [];
        this.abNormalList = [];
        this.newPatients.push(res.data.onVisit);
        this.newPatients.push(res.data.countOn);
        this.newPatients.push(res.data.countOut);
        this.visitor.push(res.data.followVisit1);
        this.visitor.push(res.data.followVisit1);
        this.visitor.push(res.data.followVisit1);
        this.sleepAboutReport.push(res.data.sleepReport1);
        this.sleepAboutReport.push(res.data.sleepReport2);
        this.psgReport.push(res.data.psg1);
        this.psgReport.push(res.data.psg2);
        this.bedMonitor.push(res.data.bedMonitor1);
        this.bedMonitor.push(res.data.bedMonitor2);
        this.bedMonitor.push(res.data.bedMonitor3);
        this.bedMonitor.push(res.data.bedMonitor4);

        this.normalList.push(res.data.bp1);
        this.abNormalList.push(res.data.bp1);
        this.normalList.push(res.data.bs1);
        this.abNormalList.push(res.data.bs2);

        this.normalList.push(res.data.heart1);
        this.abNormalList.push(res.data.heart2);

        this.normalList.push(res.data.spo1);
        this.abNormalList.push(res.data.spo2);

        this.normalList.push(res.data.temp1);
        this.abNormalList.push(res.data.temp2);

        this.normalList.push(res.data.bmi1);
        this.abNormalList.push(res.data.bmi2);



      }
    });
  }

}
