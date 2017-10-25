import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hm-bed',
  templateUrl: './hm-bed.component.html',
  styleUrls: ['./hm-bed.component.scss']
})
export class HmBedComponent implements OnInit {

  selectedDept;
  deptOptions = [];
  selectedWard;
  wardOptions = [];

  constructor() { }

  searchDept(searchText) {
  }
  searchWard(searchText) {
  }

  ngOnInit() {
  }

}
