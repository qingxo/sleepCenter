import { Component, OnInit, Input, Output, SimpleChanges, Renderer, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
import { EchartAssessService } from './echart-assess.service';
@Component({
  selector: 'app-echart-assess',
  templateUrl: './echart-assess.component.html',
  styleUrls: ['./echart-assess.component.scss'],
  providers: [EchartAssessService]
})
export class EchartAssessComponent implements OnInit, OnChanges {

  option: EChartOption;
  nothingFlag = false;
  level = '';
  suggesting = '';
  @Input() type = '';
  @Input() topTitle = '';
  @Input() serisesData: Array<any> = [];
  @Input() echartsStyle: any = { 'width': '100%', 'height': '400px' };
  @Input() name = '测试';
  @Input() imageSrc = 'xxx';
  @Input() chooseDay: any = '';
  @Input() cId = '1710241455273782625';
  @ViewChild('tt') el: ElementRef;
  constructor(private echartAssessService: EchartAssessService) { }
  dataAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  data = [220, 182, 191, 234, 290, 330, 310];
  yMax = 500;
  dataShadow = [];
  ngOnChanges(changes: SimpleChanges) {
    if (changes['chooseDay']['currentValue'] != undefined) {
      this.getServiceList();
    }
  }
  ngOnInit() {
  }


  getServiceList() {
    const data = {
      evaluateDate: this.chooseDay,
      customerId: this.cId
    };
    this.echartAssessService.getList(data).subscribe((res) => {
      if (res.success && res.data.length > 0) {
        this.data = [];
        if (this.type == 'PSQI') {
          this.data.push(res.data[0]['psqia']);
          this.data.push(res.data[0]['psqib']);
          this.data.push(res.data[0]['psqic']);
          this.data.push(res.data[0]['psqid']);
          this.data.push(res.data[0]['psqie']);
          this.data.push(res.data[0]['psqig']);
          this.data.push(res.data[0]['psqif']);
          this.level = res.data[0]['psqi'];
          this.suggesting = res.data[0]['sleepSuggest'];
          this.option = this.getOption();
        }
        else if (this.type == 'GAD7') {
          this.data.push(res.data[0]['gad71']);
          this.data.push(res.data[0]['gad72']);
          this.data.push(res.data[0]['gad73']);
          this.data.push(res.data[0]['gad74']);
          this.data.push(res.data[0]['gad75']);
          this.data.push(res.data[0]['gad76']);
          this.data.push(res.data[0]['gad77']);
          this.level = res.data[0]['gad7'];
          this.suggesting = res.data[0]['anietySuggest'];

          this.option = this.getOption();
        }
        else if (this.type == 'PHQ9') {
          this.data.push(res.data[0]['phq91']);
          this.data.push(res.data[0]['phq92']);
          this.data.push(res.data[0]['phq93']);
          this.data.push(res.data[0]['phq94']);
          this.data.push(res.data[0]['phq95']);
          this.data.push(res.data[0]['phq96']);
          this.data.push(res.data[0]['phq97']);
          this.data.push(res.data[0]['phq98']);
          this.data.push(res.data[0]['phq99']);
          this.level = res.data[0]['phq9'];
          this.suggesting = res.data[0]['depressSuggest'];


          this.option = this.getOption();
        }
      } else {
        this.data = [];
        this.data.push(0);
        this.data.push(0);
        this.data.push(0);
        this.data.push(0);
        this.data.push(0);
        this.data.push(0);
        this.data.push(0);
        this.option = this.getOption();

      }
    });
  }

  getOption() {
    const opt = {
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
      series: [
        { // For shadow
          type: 'bar',
          itemStyle: {
            normal: { color: 'rgba(0,0,0,0.5)' }
          },
          barGap: '-100%',
          barCategoryGap: '40%',
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
          },
          data: this.data
        }
      ]
    };

    return opt;

  }

}
