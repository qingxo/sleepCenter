import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { EvaluateQuestionnaireService } from './evaluate-questionnaire.service';
import * as $ from 'jquery';
import * as moment from 'moment';

@Component({
  selector: 'app-evaluate-questionnaire',
  templateUrl: './evaluate-questionnaire.component.html',
  styleUrls: ['./evaluate-questionnaire.component.scss'],
  providers: [EvaluateQuestionnaireService]
})
export class EvaluateQuestionnaireComponent implements OnInit {
  @Input() customerId = '';
  list: any = [];
  startTime: String = '';
  answersArr: any = [];
  constructor(private route: ActivatedRoute, private evaluateQuestionnaireService: EvaluateQuestionnaireService) { }

  ngOnInit() {
    this.customerId =  this.route.snapshot.params['customerId'];
    this.evaluateQuestionnaireService.getQuestionList({})
      .subscribe(res => {
        // 处理文本题的题目——“几”换成“___”
        // console.log(res);
        res.forEach((item, index) => {
          if(item.optionsList.length==1 && item.optionsList[0].itemType==3) {
            // console.log(item.question.itemTitle.replace(/几/g, '___'));
            // console.log(item);
            item.question.itemTitle = item.question.itemTitle.replace(/几/g, ' ___ ')
          }
        })
        this.list = res;
        // 填充数组
        this.answersArr = new Array(this.list.length);
        this.answersArr.fill('');
        this.calPercentage(1);
        $('.swiper-slide-active .ipt input').focus();
      })
  }
  saveAnswer() {
    var answersObj = {};
    answersObj['startTime'] = moment().format('YYYY-MM-DD hh:mm:ss');
    const copyAnswersArr = this.answersArr.concat();
    answersObj['answersArr'] = copyAnswersArr;

    this.list.forEach((item, index) => {
      if(item.optionsList.length==1 && item.optionsList[0].itemType==3) {
        var data = {
          surveyId: item.question.surveyId,
          questionId: item.question.id,
          itemVal: this.answersArr[index],
          iseqId: item.question.iseq,
          itemType: item.question.itemType,
          userId: this.customerId
        }
        answersObj['answersArr'][index] = data;
      } 
    })
    console.log(this.answersArr);
    
    const answersString = JSON.stringify(answersObj);
    
    // 保存试题
    this.evaluateQuestionnaireService.saveAnswer({
      answersObj: answersString
    }).subscribe(res => {
        
      });
  }
  chooseOption(questionInfo, option, index, event) {
    const $this = $(event.target);
    $this.parent().find('p').removeClass('checked');
    $this.addClass('checked');

    // 保存试题
    const data = {
      surveyId: questionInfo.question.surveyId,
      questionId: questionInfo.question.id,
      itemVal: option.id,
      iseqId: questionInfo.question.iseq,
      itemType: questionInfo.question.itemType,
      userId: this.customerId
    };
    this.answersArr[index] = data;

    // 进入下一题
    this.scrollNext();
    // 答完最后一题, 显示btn
    if (index == (this.list.length - 1)) {
      $('.btns-wrap .btn').show();
    }
  }
  
    public type: string = 'component';
  
    public config: SwiperConfigInterface = {
      scrollbar: null,
      direction: 'horizontal',
      loop: false,
      nextButton: '.next',
      prevButton: '.prev',
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:true,//修改swiper的父元素时，自动初始化swiper
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
      if(index == 0) {
        // 第一页
        $('.prev').hide();    
      } else if (index == (this.list.length - 1)) {
        // 末页
        $('.next').hide();
      } else {
        $('.prev').show();
        $('.next').show();
      }
      this.calPercentage(index + 1);
    }

    // 计算进度
    calPercentage(curIndex) {
      const total = this.list.length;
      const per = curIndex / total * 100;
      $('#progress').css('width', per + '%');

      if (curIndex === total) {
        $('#end').addClass('hightlight');
      } else {
        $('#end').removeClass('hightlight');
      }
    }
    scrollNext() {
      this.directiveRef.nextSlide();
    }

    scrollPrev() {
      this.directiveRef.prevSlide();
    }
}
