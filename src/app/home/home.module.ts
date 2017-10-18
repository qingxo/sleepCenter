import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from '../shared';

import { HomeComponent } from './home.component';
import { TabsComponent } from './tabs/tabs.component';
import { PatientsComponent } from './patients/patients.component';
import { SleepAnalysisComponent } from './sleep-analysis/sleep-analysis.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DialogConditionComponent } from './dialog-condition';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPatientsComponent } from './new-patients/new-patients.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [DialogConditionComponent],

  declarations: [HomeComponent,
    DemoComponent,
    TabsComponent,
    PatientsComponent,
    SleepAnalysisComponent,
    MainPageComponent,
    DialogConditionComponent,
    NewPatientsComponent
  ]
})
export class HomeModule { }
