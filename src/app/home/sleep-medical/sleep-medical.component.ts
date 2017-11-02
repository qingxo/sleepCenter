import { Component, OnInit } from '@angular/core';
import {
  SleepMedicalService
} from './sleep-medical.service';
@Component({
  selector: 'app-sleep-medical',
  templateUrl: './sleep-medical.component.html',
  styleUrls: ['./sleep-medical.component.scss'],
  providers: [SleepMedicalService]
})
export class SleepMedicalComponent implements OnInit {

  list: Array<any> = [];
  constructor(private sleepMedicalService: SleepMedicalService) { }

  ngOnInit() {
    this.showList();
  }

  showList() {
    const data = {};
    this.sleepMedicalService.getList(data).subscribe((res) => {
      if (res.success) {
        this.list = res.data;
      }
    });
  }

  makePaper() {
    console.log('make paper');
  }

}
