import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo';
import { HomeComponent } from './home.component';
import { TabsComponent } from './tabs';
import { PatientsComponent } from './patients';
import { MainPageComponent } from './main-page'
import { SleepMedicalComponent } from './sleep-medical';
import { PatientSubjectComponent } from './patient-subject';
const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: '/home/main', pathMatch: 'full' },
      { path: 'main', component: MainPageComponent },
      { path: 'demo', component: DemoComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'patientsubject', component: PatientSubjectComponent },
      { path: 'sleepmedical', component: SleepMedicalComponent }
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
