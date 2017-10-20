import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
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
  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.menuChange({ url: this.router['url'] })
    }, 1)
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
        this.activePageName = $(el).text().trim();
        this.activePageUrl = info.url;
      }
    })
    $('.ant-menu-submenu').each((index, el) => {
      $(el).click()
    });
    // $('.ant-menu-submenu').removeClass('ant-menu-submenu-open');
    // $('ul.ant-menu-sub').remove();


  }

  getTabInfo(data) {
    this.tabLength = data.len;
    this.activePageName = data.name;
    this.activePageUrl = data.url;
    this.menuChange({ url: this.activePageUrl, name: this.activePageName })
  }
}
