import { Component, OnInit, Input } from '@angular/core';
import { PersonInfoService } from '../person-info/person-info.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss'],
  providers: [PersonInfoService]
})
export class PatientInfoComponent implements OnInit {
  @Input() customerId: any = {};
  personInfo: any = {};
  constructor(private personInfoService: PersonInfoService) { }

  ngOnInit() {
    this.getPersonInfo();
  }
  getPersonInfo() {
    this.personInfoService.getPersonInfo({
      customerId: this.customerId
    }).subscribe(res => {
      this.personInfo = res.data;
    });
  }

}
