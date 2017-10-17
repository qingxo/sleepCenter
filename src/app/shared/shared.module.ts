import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';


import { LineBtnComponent } from "./line-btn";
import { SearchLineComponent } from './search-line';
import { HeadLayoutComponent } from './head-layout/head-layout.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  declarations: [
    LineBtnComponent,
    SearchLineComponent,
    HeadLayoutComponent
  ],
  exports: [
    LineBtnComponent,
    SearchLineComponent,
    HeadLayoutComponent
  ]
})
export class SharedModule { }
