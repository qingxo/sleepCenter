import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import {HomeRoutingModule} from './home-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {HomeComponent} from './home.component';
import { TabsComponent } from './tabs/tabs.component';
import { PatientsComponent } from './patients/patients.component';
import { SleepAnalysisComponent } from './sleep-analysis/sleep-analysis.component';
import { TtsComponent } from './tts/tts.component';
import { MainPageComponent } from './main-page/main-page.component';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent,DemoComponent, TabsComponent, PatientsComponent, SleepAnalysisComponent, TtsComponent, MainPageComponent]
})
export class HomeModule { }
