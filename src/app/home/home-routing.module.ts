import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo';
import { HomeComponent } from './home.component';
import { TabsComponent } from './tabs';
import { PatientsComponent } from './patients';
import { MainPageComponent } from './main-page'
import { SleepMedicalComponent } from './sleep-medical';
import { PatientSubjectComponent } from './patient-subject';
import { AccountsComponent } from './accounts';
import { PrivilegesComponent } from './privileges';
import { EvaluationsComponent } from './evaluations';
import { SleepAnalysisComponent } from './sleep-analysis';
import { HmMsmComponent } from './hm-msm';
import { EchartEvaluationComponent } from './echart-evaluation';

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
      { path: 'evaluations', component: EvaluationsComponent },
      { path: 'sleepanalysis', component: SleepAnalysisComponent },
      { path: 'hmmsm', component: HmMsmComponent },
      { path: 'echartevaluation', component: EchartEvaluationComponent }
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
