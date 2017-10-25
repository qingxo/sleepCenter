import { Component, OnInit, Input, Output, SimpleChanges, Renderer, ElementRef, ViewChild, AfterContentChecked } from '@angular/core';
import { EChartOption } from 'echarts-ng2';

@Component({
  selector: 'app-echart-assess2',
  templateUrl: './echart-assess2.component.html',
  styleUrls: ['./echart-assess2.component.scss']
})
export class EchartAssess2Component implements OnInit {

  private option: EChartOption;
  private nothingFlag = false;
  @Input() type = '';
  @Input() topTitle = '';
  @Input() serisesData: Array<any> = [];
  @Input() echartsStyle: any = { 'width': '100%', 'height': '400px' };
  @Input() name: string = '测试';
  @Input() imageSrc: string = "xxx";
  @ViewChild('tt') el: ElementRef;
  constructor() { }
  dataAxis = ['09/20', '09/21', '09/22', '09/23', '09/24', '09/25', '09/26'];
  data = [70, 123, 100, 30, 150, 92, 86];
  yMax = 500;
  dataShadow = [];
  ngOnInit() {
    this.option = {
      // title: {
      //     text: '特性示例：渐变色 阴影 点击缩放',
      //     subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
      // },
      legend: {
        show: true
      },
      xAxis: {
          data: this.dataAxis,
          axisLabel: {
              inside: false,
              textStyle: {
                  color: '#888'
              }
          },
          axisTick: {
              show: false
          },
          axisLine: {
              show: false
          },
          z: 10
      },
      yAxis: {
          min: 0,
          max: 'dataMax',
          axisLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              textStyle: {
                  color: '#a5a5a5'
              }
          },
          splitLine: {
            lineStyle: {
                color: ['#ccc'],
                type: 'dashed'
              }
          }
      },
    //   dataZoom: [
    //       {
    //           type: 'inside'
    //       }
    //   ],
      series: [
          { // For shadow
              type: 'bar',
              itemStyle: {
                  normal: {color: 'rgba(0,0,0,0.5)'}
              },
              barGap:'-100%',
              barCategoryGap:'40%',
              data: this.dataShadow,
              animation: false
          },
          {
              type: 'bar',
              itemStyle: {
                  normal: {
                      color: '#7ACC5A',
                      barBorderRadius: [30, 30, 0, 0]
                  },
                  // emphasis: {
                  //     color: new echarts.graphic.LinearGradient(
                  //         0, 0, 0, 1,
                  //         [
                  //             {offset: 0, color: '#2378f7'},
                  //             {offset: 0.7, color: '#2378f7'},
                  //             {offset: 1, color: '#83bff6'}
                  //         ]
                  //     )
                  // }
              },
              label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#6F7B91'
                }
                },  
              data: this.data
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
