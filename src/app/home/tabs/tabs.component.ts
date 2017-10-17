import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnChanges {

  @Input() activePage: string = '';
  @Input() activeUrl: string = '';
  @Output() fired: EventEmitter<any> = new EventEmitter<any>();
  @Output() tabLen: EventEmitter<number> = new EventEmitter<number>();
  tabs = [
    {
      name: '我的首页',
      url: '/home/main'
    }
  ];
  indexPageName: string = '我的首页';
  btnIndex: number = 0;
  @ViewChild('nzTabHeading') el: ElementRef;

  constructor(public route: ActivatedRoute, public router: Router) {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['activeUrl'] && changes['activeUrl']['currentValue'] !== '') {
      this.tabsOperate()
      this.activeTab();
    }
  }

  tabsOperate() {
    let addFlag = true;
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].url === this.activeUrl) {
        addFlag = false;
        break;
      }
    }
    if (addFlag) {
      this.tabs.push({ name: this.activePage, url: this.activeUrl })
    }

    this.tabLen.emit(this.tabs.length);
  }

  activeTab() {
    setTimeout(() => {
      if (this.activeUrl != null) {
        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i].url === this.activeUrl) {
            this.btnIndex = i;
            break;
          }
        }
        $('.ant-tabs-tab').removeClass('ant-tabs-tab-active');
        $('.ant-tabs-tab').eq(this.btnIndex).addClass('ant-tabs-tab-active');
      }
    }, 1)

  }

  showTpl(info, index) {
    this.fired.emit(info);
    this.btnIndex = index;
    this.activeUrl = info.url;
    this.activeTab()
    this.goTabPages(info.url);
  }

  goTabPages(url) {
    this.router.navigate([url]);
  }

  ngOnInit() {
  }
  closeTab(tab, index) {
    if (this.btnIndex !== index) { //关闭的页面，不是当前展示的页面时
      this.tabs.splice(this.tabs.indexOf(tab), 1);
    } else {
      this.tabs.splice(this.tabs.indexOf(tab), 1);
      let len = this.tabs.length - 1;
      index > len ? this.btnIndex = len : this.btnIndex = index;
      this.activeUrl = this.tabs[this.btnIndex].url;
      this.activeTab()
      this.goTabPages(this.tabs[this.btnIndex].url)

    }
    this.tabLen.emit(this.tabs.length);

  };



}
