import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo';
import { HomeComponent } from './home.component';
import { TabsComponent } from './tabs';
import { PatientsComponent } from './patients';
import { MainPageComponent } from './main-page';
import { SleepMedicalComponent } from './sleep-medical';
import { PatientSubjectComponent } from './patient-subject';
import { AccountsComponent } from './accounts';
import { PrivilegesComponent } from './privileges';
import { SleepAssessmentComponent } from './sleep-assessment';
import { SleepAnalysisComponent } from './sleep-analysis';
import { HmMsmComponent } from './hm-msm';
import { SleepReportsComponent } from './sleep-reports';
import { EchartEvaluationComponent } from './echart-evaluation';
import { HmBedComponent } from './hm-bed';

const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: '/home/main', pathMatch: 'full' },
      { path: 'main', component: MainPageComponent },
      { path: 'demo', component: DemoComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'patientsubject', component: PatientSubjectComponent },
      { path: 'sleepmedical', component: SleepMedicalComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'privileges', component: PrivilegesComponent },
      { path: 'sleepassessment', component: SleepAssessmentComponent },
      { path: 'sleepanalysis', component: SleepAnalysisComponent },
      { path: 'sleepreports', component: SleepReportsComponent },
      { path: 'echartevaluation', component: EchartEvaluationComponent },
      { path: 'hmmsm', component: HmMsmComponent },
      { path: 'hmbed', component: HmBedComponent }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(
      homeRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
