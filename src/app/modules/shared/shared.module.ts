import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NglModule} from 'ng-lightning';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NglModule
  ],
  exports: [
    NglModule
  ]
})
export class SharedModule { }
