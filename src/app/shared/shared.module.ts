import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LineBtnComponent } from "./line-btn";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LineBtnComponent],
  exports: [LineBtnComponent]
})
export class SharedModule { }
