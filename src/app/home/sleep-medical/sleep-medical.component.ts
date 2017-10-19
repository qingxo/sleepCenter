import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sleep-medical',
  templateUrl: './sleep-medical.component.html',
  styleUrls: ['./sleep-medical.component.scss']
})
export class SleepMedicalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  makePaper() {
    console.log("make paper")
  }

}
