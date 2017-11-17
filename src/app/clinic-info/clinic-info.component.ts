import { Component, OnInit, Input } from '@angular/core';
import { ClinicInfoService } from './clinic-info.service';

@Component({
  selector: 'app-clinic-info',
  templateUrl: './clinic-info.component.html',
  styleUrls: ['./clinic-info.component.scss'],
  providers: [ClinicInfoService]
})
export class ClinicInfoComponent implements OnInit {
  @Input() customerId: String = '';
  id: string = '';
  clinicInfo: any = {};
  constructor(private clinicInfoService: ClinicInfoService) { }

  ngOnInit() {
    this.getClinicInfo();
  }

  catchId(num) {
    if (num != this.id) {
      this.id = num;
      this.getClinicInfo()
    }
  }

  getClinicInfo() {
    let data = {
      customerId: this.customerId,
      visitId: this.id
    }
    this.clinicInfoService.getClinicInfo(
      data
    ).subscribe(res => {
      this.clinicInfo = res.data;
    });
  }

}
