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
  clinicInfo: any = {};
  constructor(private clinicInfoService: ClinicInfoService) { }

  ngOnInit() {
    this.getClinicInfo();
  }

  getClinicInfo() {
    this.clinicInfoService.getClinicInfo({
      //customerId: this.customerId
      customerId: '1705101137488803263' // 测试
    }).subscribe(res => {
      this.clinicInfo = res.data;
    });
  }

}
