import { NgModule } from '@angular/core';
import { LoginComponent } from './common/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'sample',
        loadChildren: './sample/sample.module#SampleModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
