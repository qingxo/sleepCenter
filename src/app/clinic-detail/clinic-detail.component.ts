import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clinic-detail',
  templateUrl: './clinic-detail.component.html',
  styleUrls: ['./clinic-detail.component.scss']
})
export class ClinicDetailComponent implements OnInit {
  @Input() clinicInfo: any = {
    // visitRecords: {
    //   visitDate: ''
    // }
  };
  //visitRecords: any = {};
  constructor() { }

  ngOnInit() {
    //this.visitRecords = this.clinicInfo.visitRecords;
    //console.log(this.visitRecords);
  }

}
