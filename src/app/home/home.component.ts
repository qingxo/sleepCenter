import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeShow:boolean = true;
  otherShow:any ;
  constructor() { }

  ngOnInit() {
  }

  toggleChoose(num,ev){
    if(num === 1){
        this.homeShow = !this.homeShow;
        this.otherShow.target.className = 'ant-menu-item';
    }else{
      this.otherShow = ev;
      this.homeShow = false;
    }
    console.log(this.otherShow)
  }

  test(){
    console.log("test")
  }


}
