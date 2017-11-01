import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hmbed-detail',
  templateUrl: './hmbed-detail.component.html',
  styleUrls: ['./hmbed-detail.component.scss']
})
export class HmbedDetailComponent implements OnInit {

  customerId: string = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.customerId = this.route.snapshot.params['customerId']
  }

}
