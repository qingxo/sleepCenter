import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login';
import { NotFoundComponent } from './not-found';
import { PatientDetailComponent } from './patient-detail';
import { MedicalDetailComponent } from './medical-detail';
import { EvaluateQuestionnaireComponent } from './evaluate-questionnaire';
import { AssessmentResultComponent } from './assessment-result';
import { HmbedDetailComponent } from './hmbed-detail';
import { HmmsmDetailComponent } from './hmmsm-detail';
import { ViewQuestionnaireComponent } from './view-questionnaire';
import { TestReportComponent } from './test-report'
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'patientdetail/:customerId', component: PatientDetailComponent },
  { path: 'medicaldetail/:customerId', component: MedicalDetailComponent },
  { path: 'hmmsmdetail/:customerId', component: HmmsmDetailComponent },
  { path: 'hmbeddetail/:customerId', component: HmbedDetailComponent },
  { path: 'evaluatequestionnaire/:customerId', component: EvaluateQuestionnaireComponent },
  { path: 'assessmentresult/:customerId/:evaluateTime', component: AssessmentResultComponent },
  { path: 'viewquestionnaire/:customerId', component: ViewQuestionnaireComponent },
  { path: 'tsreport/:customerId', component: TestReportComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
        //  preloadingStrategy: PreloadAllModules
      } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
