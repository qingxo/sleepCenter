import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PersonInfoService } from './person-info.service';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss'],
  providers: [PersonInfoService]
})
export class PersonInfoComponent implements OnInit, OnChanges {
  @Input() customerId: String = '';
  personInfo: any = {};
  constructor(private personInfoService: PersonInfoService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.customerId != '') {
      this.getPersonInfo();
    }
  }

  getPersonInfo() {
    const data = { customerId: this.customerId };
    this.personInfoService.getPersonInfo(data).subscribe(res => {
      this.personInfo = res.data;
    });
  }

}
