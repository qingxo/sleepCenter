import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewQuestionnaireService } from './view-questionnaire.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-view-questionnaire',
  templateUrl: './view-questionnaire.component.html',
  styleUrls: ['./view-questionnaire.component.scss'],
  providers: [ViewQuestionnaireService]
})
export class ViewQuestionnaireComponent implements OnInit {

  customerId: String = '';
  list: any = [];
  constructor(private viewQuestionnaireService: ViewQuestionnaireService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.customerId = this.route.snapshot.params['customerId'];
    this.viewQuestionnaire();
  }

  viewQuestionnaire() {
    this.viewQuestionnaireService.viewQuestionnaire({
      customerId: this.customerId, //1710241455276577998傅月昆
      startTime: '2017-10-31'
    }).subscribe(res => {
      this.list = res.success;
    });
  }

}
