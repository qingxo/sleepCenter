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
import { EvaluationsComponent } from './evaluations';
import { DialogEvaluationComponent } from './dialog-evaluation';
import { HmMsmComponent } from './hm-msm/hm-msm.component';
import { SleepAnalysisComponent } from './sleep-analysis';
import { EchartEvaluationComponent } from './echart-evaluation';


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
  entryComponents: [DialogConditionComponent, DialogAccountComponent, DialogEvaluationComponent],

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
    EvaluationsComponent,
    DialogEvaluationComponent,
    DialogConditionComponent,
    HmMsmComponent,
    SleepAnalysisComponent,
    EchartEvaluationComponent
  ]
})
export class HomeModule { }
