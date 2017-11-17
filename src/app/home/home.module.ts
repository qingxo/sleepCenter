import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from '../shared';
import { EchartsNg2Module } from 'echarts-ng2';

import { HomeComponent } from './home.component';
import { TabsComponent } from './tabs/tabs.component';
import { PatientsComponent } from './patients/patients.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DialogConditionComponent } from './dialog-condition';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPatientsComponent } from './new-patients/new-patients.component';
import { CirclesComponent } from './circles';
import { SleepMedicalComponent } from './sleep-medical/sleep-medical.component';
import { PatientSubjectComponent } from './patient-subject/patient-subject.component';
import { AccountsComponent } from './accounts';
import { PrivilegesComponent } from './privileges';
import { DialogAccountComponent } from './dialog-account';
import { SleepAssessmentComponent } from './sleep-assessment';
import { DialogAssessComponent } from './dialog-assess';
import { HmMsmComponent } from './hm-msm/hm-msm.component';
import { SleepAnalysisComponent } from './sleep-analysis';
import { BarLineComponent } from './bar-line/bar-line.component';
import { SleepReportsComponent } from './sleep-reports';
import { EchartEvaluationComponent } from './echart-evaluation';
import { DialogHmmsmComponent } from './dialog-hmmsm';
import { HmBedComponent } from './hm-bed/hm-bed.component';
import { DialogHmbedComponent } from './dialog-hmbed';
import { ArealDistributionComponent } from './areal-distribution';
import { CircleDistributionComponent } from './circle-distribution';
import { BarDistributionComponent } from './bar-distribution';
import { AgeDistributionComponent } from './age-distribution';
import { SexDistributionComponent } from './sex-distribution';
import { Test5Component } from './test5/test5.component';
import { Test4Component } from './test4/test4.component';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HomeRoutingModule,
    EchartsNg2Module,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [DialogConditionComponent, DialogAccountComponent, DialogAssessComponent, DialogHmmsmComponent, DialogHmbedComponent],

  declarations: [HomeComponent,
    DemoComponent,
    TabsComponent,
    PatientsComponent,
    MainPageComponent,
    DialogConditionComponent,
    NewPatientsComponent,
    CirclesComponent,
    SleepMedicalComponent,
    PatientSubjectComponent,
    AccountsComponent,
    PrivilegesComponent,
    DialogAccountComponent,
    SleepAssessmentComponent,
    DialogAssessComponent,
    DialogConditionComponent,
    HmMsmComponent,
    SleepAnalysisComponent,
    BarLineComponent,
    SleepReportsComponent,
    EchartEvaluationComponent,
    DialogHmmsmComponent,
    HmBedComponent,
    DialogHmbedComponent,
    ArealDistributionComponent,
    CircleDistributionComponent,
    AgeDistributionComponent,
    SexDistributionComponent,
    BarDistributionComponent,
    DialogHmbedComponent,
    Test5Component,
    Test4Component
  ]
})
export class HomeModule { }
