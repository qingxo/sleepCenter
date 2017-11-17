import { Component, OnInit, Input, Output, SimpleChanges, Renderer, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
@Component({
  selector: 'app-bar-distribution',
  templateUrl: './bar-distribution.component.html',
  styleUrls: ['./bar-distribution.component.scss']
})
export class BarDistributionComponent implements OnInit, OnChanges {

  option: EChartOption;
  nothingFlag = false;
  echartsStyle: Object = { 'height': '180px' };
  @Input() dataSeries: Array<any> = [];
  @Input() title: String = '';
//   @Input() dataTitle: Array<any> = [];
//   @Input() data: Array<any> = [];
  @ViewChild('tt') el: ElementRef;
  constructor() { }

  ngOnInit() {
    const data = [];
    // for (let i = 0; i < this.dataTitle.length; i++) {
    //   data.push({ value: this.data[i], name: this.dataTitle[i] });
    // }
    this.option = this.getOption(data);
  }

  ngOnChanges(changes: SimpleChanges) {
    //this.finishOptionData();

  }

  finishOptionData() {
    //const tmp = this.getOption();
    // for (let i = 0; i < this.topTitle.length; i++) {
    //   tmp.series[0]['data'].push({ value: this.dataSeries[i], name: this.topTitle[i] });
    // }
    // tmp.legend.top = 45 - tmp.series[0]['data'].length * 6 + '%';
    // this.option = tmp;
  }
  

  getOption(data) {
    return  {
        title : {
            text: this.title,
            x:'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['男','女'],
            left: 'center',
            top: 'bottom',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        color: ['#3D70E4', '#9879FF', '#00C7FE', '#FF955F', '#768bef'],
        xAxis : [
            {
                type : 'category',
                data : ['杭州','宁波','温州','绍兴','湖州','嘉兴','台州', '金华','衢州','丽水','义务', '东阳']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'男',
                type:'bar',
                stack: '人数',
                data:[120, 132, 101, 134, 90, 230, 210,134, 90, 230, 210]
            },
            {
                name:'女',
                type:'bar',
                stack: '人数',
                data:[220, 182, 191, 234, 290, 330, 310, 134, 90, 230, 210]
            }
        ]
    };
  }


}
