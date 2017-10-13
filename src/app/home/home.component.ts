import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeShow:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleChoose(){
    this.homeShow = !this.homeShow;
    this.menuColorChange()
  }

  menuColorChange(){
    if(this.homeShow){

    }
  }

}
