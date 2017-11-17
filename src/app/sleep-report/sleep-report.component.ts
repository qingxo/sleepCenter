import { Component, Input, OnInit } from '@angular/core';
import { SleepReportsService } from '../home/sleep-reports';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sleep-report',
  templateUrl: './sleep-report.component.html',
  styleUrls: ['./sleep-report.component.scss'],
  providers: [SleepReportsService]
})
export class SleepReportComponent implements OnInit {

  @Input() customerId: string = '';
  list: Array<any> = [];
  constructor(private sleepReportsService: SleepReportsService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.customerId = this.route.snapshot.params['customerId']
    this.getList();
  }

  getList() {
    let data = { customerId: this.customerId }
    this.sleepReportsService.getList(data).subscribe((res) => {
      this.list = res.data
    })
  }

}
