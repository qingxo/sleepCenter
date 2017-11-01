import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hmmsm-detail',
  templateUrl: './hmmsm-detail.component.html',
  styleUrls: ['./hmmsm-detail.component.scss']
})
export class HmmsmDetailComponent implements OnInit {
  customerId: String = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.customerId = this.route.snapshot.params['customerId'];
    // this.customerId = '1710241455273782625';
  }

}
