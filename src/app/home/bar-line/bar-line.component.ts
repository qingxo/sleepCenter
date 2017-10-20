import { Component, OnInit, Input, Output, SimpleChanges, Renderer, ElementRef, ViewChild, AfterContentChecked } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
@Component({
  selector: 'app-bar-line',
  templateUrl: './bar-line.component.html',
  styleUrls: ['./bar-line.component.scss']
})
export class BarLineComponent implements OnInit {
  private option: EChartOption;
  private nothingFlag = false;
  @Input() topTitle = '';
  @Input() serisesData: Array<any> = [];
  @Input() echartsStyle: any = { 'height': '180px' };
  @Input() name: string = '测试';
  @Input() imageSrc: string = "xxx";
  @ViewChild('tt') el: ElementRef;
  constructor() { }

  ngOnInit() {
  }

}
