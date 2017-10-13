import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {DemoComponent} from './demo';
import {HomeComponent} from './home.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent,
    children:[
      { path: '', redirectTo: '/home/demo', pathMatch: 'full' },
      {path:'demo',component:DemoComponent}
    ]
 },

];

@NgModule({
  imports: [
    RouterModule.forChild(
      homeRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
