import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  count = 0;
  constructor() { }

  ngOnInit() {
    console.log('init demo');
  }

  clickCount(ev){
    this.count++;
  }

}
