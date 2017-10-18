import { Component, OnInit, Input, Output, SimpleChanges, Renderer, ElementRef, ViewChild, AfterContentChecked } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent implements OnInit {

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
    this.option = {

      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      color: ['#3D70E4', '#9879FF', '#00C7FE', '#FF955F'],
      legend: {
        orient: 'vertical',
        right: '20%',
        top: '30%',
        itemGap: 15,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['20%', '50%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '14',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }
      ]

    }
  }
  //
  // ngAfterContentChecked() {
  //   if (this.serisesData.length > 0) {
  //     this.option = this.getOption();
  //     this.el.nativeElement.className = 'lines';
  //     this.nothingFlag = true;
  //   } else {
  //     this.el.nativeElement.className = 'lines black-hole';
  //     this.nothingFlag = false;
  //   }
  // }

  getOption() {
    const opt = {
      title: {
        text: this.topTitle,
        x: 'center',
        textStyle: {
          color: '#686868'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },

      series: [
        {
          name: this.topTitle,
          type: 'pie',
          radius: '70%',
          center: ['50%', '60%'],
          data: this.serisesData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    return opt;

  }

}
