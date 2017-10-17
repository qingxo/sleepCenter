import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LineBtnComponent } from "./line-btn";
import { SearchLineComponent } from './search-line';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LineBtnComponent,
    SearchLineComponent
  ],
  exports: [
    LineBtnComponent,
    SearchLineComponent
  ]
})
export class SharedModule { }
