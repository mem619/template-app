import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { ListSampleComponent } from './list-sample/list-sample.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListSampleComponent],
  imports: [
    CommonModule,
    SampleRoutingModule,
    SharedModule
  ]
})
export class SampleModule { }
