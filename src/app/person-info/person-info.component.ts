import { Component, OnInit, Input } from '@angular/core';
import { PersonInfoService } from './person-info.service';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss'],
  providers: [PersonInfoService]
})
export class PersonInfoComponent implements OnInit {
  @Input() customerId: String = '';
  personInfo: any = {};
  constructor(private personInfoService: PersonInfoService) { }

  ngOnInit() {
    this.getPersonInfo();
  }

  getPersonInfo() {
    const data = {customerId: this.customerId};
    this.personInfoService.getPersonInfo(data).subscribe(res => {
      this.personInfo = res.data;
    });
  }

}
