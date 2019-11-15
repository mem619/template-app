import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSampleComponent } from './list-sample/list-sample.component';


const routes: Routes = [
  {
    path: '',
    component: ListSampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
