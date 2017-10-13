import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import {HomeRoutingModule} from './home-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {HomeComponent} from './home.component';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent,DemoComponent]
})
export class HomeModule { }
