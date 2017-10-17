import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeShow: boolean = true;
  otherShow: any;
  activePageName: string = '';
  activePageUrl: string = '';
  tabLength: number = 1;
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

  toggleChoose(num, ev) {
    if (num === 1) {
      this.homeShow = !this.homeShow;
      this.otherShow.target.className = 'ant-menu-item';
    } else {
      this.otherShow = ev;
      this.homeShow = false;
    }

    this.activePageName = ev.target.innerText;
    setTimeout(() => {
      this.activePageUrl = this.route['_futureSnapshot']['_routerState'].url
    }, 1)

  }

  menuChange(info) {
    $(".ant-menu-item").removeClass('ant-menu-item-selected');
    $('.ant-menu-item').each((index, el) => {
      if ($(el).attr('routerlink') === info.url) {
        $(el).addClass('ant-menu-item-selected');
      }
    })
    this.activePageName = info.name;
  }

  tabLengh(num) {
    this.tabLength = num;
  }
}
