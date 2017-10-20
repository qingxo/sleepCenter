import { Component, OnInit, ViewChild } from '@angular/core';
import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper';

@Component({
  selector: 'app-evaluate-questionnaire',
  templateUrl: './evaluate-questionnaire.component.html',
  styleUrls: ['./evaluate-questionnaire.component.scss']
})
export class EvaluateQuestionnaireComponent implements OnInit {

  tabs: Array<any> = [{ name: '基本信息' }, { name: '诊疗信息' }, { name: '体征监测' }, { name: '睡眠监测' }, { name: '睡眠报告' }]
  showIndex: number = 0;
  example1SwipeOptions: any;

  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

  constructor() {
    this.example1SwipeOptions = {
      slidesPerView: 4,
      loop: false,
      spaceBetween: 5
    };
  }

  ngOnInit() {
  }

  tabShow(tab, index) {
    this.showIndex = index;
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }

}
