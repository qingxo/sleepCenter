import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import * as $ from 'jquery';

@Component({
  selector: 'app-evaluate-questionnaire',
  templateUrl: './evaluate-questionnaire.component.html',
  styleUrls: ['./evaluate-questionnaire.component.scss']
})
export class EvaluateQuestionnaireComponent implements OnInit {

  tabs: Array<any> = [{ name: '基本信息' }, { name: '诊疗信息' }, { name: '体征监测' }, { name: '睡眠监测' }, { name: '睡眠报告' }]
  showIndex: number = 0;
  constructor() { }

  ngOnInit() {
    this.calPercentage(1);
  }

  tabShow(tab, index) {
    this.showIndex = index;
  }

  public show: boolean = true;
  
    public slides = [
      'First slide',
      'Second slide',
      'Third slide'
    ];
  
    public type: string = 'component';
  
    public config: SwiperConfigInterface = {
      scrollbar: null,
      direction: 'horizontal',
      loop: false,
      nextButton: '.next',
      prevButton: '.prev'
    };
  
    @ViewChild(SwiperComponent) componentRef: SwiperComponent;
    @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  
    // toggleType() {
    //   this.type = this.type == 'component' ? 'directive' : 'component';
    // }
  
    // toggleDirection() {
    //   this.config.direction = (this.config.direction == 'horizontal') ? 'vertical' : 'horizontal';
    // }
  
    // toggleSlidesPerView() {
    //   if (this.config.slidesPerView != 1) {
    //     this.config.slidesPerView = 1;
    //   } else {
    //     this.config.slidesPerView = +this.config.slidesPerView + 1;
    //   }
    // }
  
    // toggleOverlayControls() {
    //   if (this.config.pagination) {
    //     this.config.scrollbar = '.swiper-scrollbar';
    //     this.config.pagination = null;
    //     this.config.nextButton = null;
    //     this.config.prevButton = null;
    //   } else if (this.config.scrollbar) {
    //     this.config.scrollbar = null;
    //   } else {
    //     this.config.pagination = '.swiper-pagination';
    //     this.config.nextButton = '.swiper-button-next';
    //     this.config.prevButton = '.swiper-button-prev';
    //   }
    // }
  
    // toggleKeyboardControl() {
    //   this.config.keyboardControl = !this.config.keyboardControl;
    // }
  
    // toggleMouseWheelControl() {
    //   this.config.mousewheelControl = !this.config.mousewheelControl;
    // }
  
    onIndexChange(index: number) {
      console.log('Swiper index: ' + index);
      this.calPercentage(index + 1);
    }

    // 计算进度
    calPercentage(curIndex) {
      const total = this.slides.length;
      const per = curIndex / total * 100;
      $('#progress').css('width', per + '%');

      if (curIndex === total) {
        $('#end').addClass('hightlight');
      } else {
        $('#end').removeClass('hightlight');
      }
    }
    scrollNext() {
      
    }

    scrollPrev() {

    }
}
