import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login';
import { NotFoundComponent } from './not-found';
import { PatientDetailComponent } from './patient-detail';
import { MedicalDetailComponent } from './medical-detail';
import { EvaluateQuestionnaireComponent } from './evaluate-questionnaire';
import { AssessmentResultComponent } from './assessment-result';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'patientdetail', component: PatientDetailComponent },
  { path: 'medicaldetail', component: MedicalDetailComponent },
  { path: 'evaluatequestionnaire', component: EvaluateQuestionnaireComponent },
  { path: 'assessmentresult', component: AssessmentResultComponent },
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
