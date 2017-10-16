import { Component, OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges,ViewChild,ElementRef } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit,OnChanges {

@Input() activePage:string = '';
@Input() activeUrl:string='';
@Output() fired:EventEmitter<any> = new EventEmitter<any>()
indexPage:object = {
  name:'我的首页',
  url:'/home/patients'
};
    tabs = [
  ];
indexPageName:string = '我的首页';
btnIndex:number = 0;
@ViewChild('nzTabHeading') el:ElementRef;

  constructor(public route:ActivatedRoute,public router:Router) {
  }

  ngOnChanges(changes:SimpleChanges){

    if(changes['activeUrl'] && changes['activeUrl']['currentValue']!==''){
      this.tabsOperate()
      this.activeTab();
    }
  }

  tabsOperate(){
    if(this.tabs.length==0){
      this.tabs.push(this.indexPage);
    }
    let addFlag = true;
    for(let i =0;i<this.tabs.length;i++){
      if(this.tabs[i].url === this.activeUrl){
        addFlag = false;
        break;
      }
    }
    if(addFlag){
        this.tabs.push({name:this.activePage,url:this.activeUrl})
    }
  }

  activeTab(){
    setTimeout(()=>{
      if(this.activeUrl!=null){
        let tmp = 0
        for(let i =0;i<this.tabs.length;i++){
          if(this.tabs[i].url === this.activeUrl){
            tmp = i;
            break;
          }
        }
        $('.ant-tabs-tab').removeClass('ant-tabs-tab-active');
        $('.ant-tabs-tab').eq(tmp).addClass('ant-tabs-tab-active');
        $('.ant-tabs-bar').attr('ng-reflect-selected-index',tmp);
        for(let j=0;j<this.tabs.length;j++){
          $('.ant-tabs-tabpan').addClass('ant-tabs-tabpane-inactive')
        }
        $('.ant-tabs-tabpan').eq(tmp).removeClass('ant-tabs-tabpane-inactive').addClass('ant-tabs-tabpane-active')

      }
    },1)

  }

  showTpl(info){
    this.router.navigate([info.url]);
    // this.fired.emit(info);
    console.log()
  }

  ngOnInit() {
    console.log("init tabs")
  }
  closeTab(tab) {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  };



}
