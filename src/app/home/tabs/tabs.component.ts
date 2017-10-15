import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

@Input() activePage:string = '';
    tabs = [
    {
      name: 'Tab 1'
    },
    {
      name: 'Tab 2'
    }
  ];
  constructor() {
  }

  ngOnInit() {
    console.log("init tabs")
  }



  closeTab(tab) {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  };

  newTab() {
    this.tabs.push({
      name: 'New Tab'
    });
  };



}
