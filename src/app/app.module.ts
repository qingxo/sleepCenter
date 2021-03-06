import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { HomeModule } from './home';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared';
import { EchartsNg2Module } from 'echarts-ng2';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { InterceptedHttp, httpFactory } from './shared/base.http.interceptor';
import { LoginGuard } from './guard/LoginGuard';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './shared/custom-reuse-strategy';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { ClinicInfoComponent } from './clinic-info/clinic-info.component';
import { SignMonitorComponent } from './sign-monitor/sign-monitor.component';
import { SleepMonitorComponent } from './sleep-monitor/sleep-monitor.component';
import { SleepReportComponent } from './sleep-report/sleep-report.component';
import { MedicalDetailComponent } from './medical-detail/medical-detail.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { EvaluateQuestionnaireComponent } from './evaluate-questionnaire';
import { ClinicListComponent } from './clinic-list/clinic-list.component';
import { ClinicDetailComponent } from './clinic-detail/clinic-detail.component';
import { BloodOxygenComponent } from './blood-oxygen';
import { BloodPressureComponent } from './blood-pressure';
import { BloodSugarComponent } from './blood-sugar';
import { BmiLineComponent } from './bmi-line';
import { HeatLineComponent } from './heat-line';
import { HeartLineComponent } from './heart-line';
import { MoveActionComponent } from './move-action';
import { BedAnalysisComponent } from './bed-analysis';
import { CirclesComponent } from './circles';
import { AssessmentResultComponent } from './assessment-result';
import { EchartAssessComponent } from './echart-assess';
import { EchartAssess2Component } from './echart-assess2';
import { HmmsmDetailComponent } from './hmmsm-detail/hmmsm-detail.component';
import { HmbedDetailComponent } from './hmbed-detail/hmbed-detail.component';
import { BedMonitorComponent } from './bed-monitor/bed-monitor.component';
import { ViewQuestionnaireComponent } from './view-questionnaire';
import { EchartArealineComponent } from './echart-arealine';
import { TestReportComponent } from './test-report/test-report.component';
const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true,
  keyboardControl: true
};
@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent,
    LoginComponent,
    NotFoundComponent,
    PatientDetailComponent,
    PatientInfoComponent,
    ClinicInfoComponent,
    SignMonitorComponent,
    SleepMonitorComponent,
    SleepReportComponent,
    MedicalDetailComponent,
    PersonInfoComponent,
    EvaluateQuestionnaireComponent,
    ClinicListComponent,
    ClinicDetailComponent,
    HeatLineComponent,
    BmiLineComponent,
    BloodSugarComponent,
    BloodPressureComponent,
    BloodOxygenComponent,
    HeartLineComponent,
    MoveActionComponent,
    BedAnalysisComponent,
    CirclesComponent,
    AssessmentResultComponent,
    EchartAssessComponent,
    EchartAssess2Component,
    EvaluateQuestionnaireComponent,
    HmmsmDetailComponent,
    HmbedDetailComponent,
    BedMonitorComponent,
    ViewQuestionnaireComponent,
    EchartArealineComponent,
    TestReportComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    SharedModule,
    HomeModule,
    EchartsNg2Module,
    SwiperModule.forRoot(SWIPER_CONFIG),
    NgZorroAntdModule.forRoot({ extraFontName: 'anticon', extraFontUrl: '/assets/fonts/iconfont' }),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    },
    LoginGuard,
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
