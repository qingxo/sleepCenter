import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeShow:boolean = true;
  otherShow:any ;
  activePageName:string = '';
  activePageUrl:string='';
  constructor(public route:ActivatedRoute) { }

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

    this.activePageName  =ev.target.innerText;
    setTimeout(()=>{
      this.activePageUrl =this.route['_futureSnapshot']['_routerState'].url
    },1)

  }

  menuChange(info){
    console.log("the home component info:",info);
  }

  test(){
    console.log("test")
  }


}
