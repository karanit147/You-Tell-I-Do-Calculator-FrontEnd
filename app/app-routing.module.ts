import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpeningPageComponent } from './component/opening-page/opening-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { SignupPageComponent } from './component/signup-page/signup-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ActivityLogComponent } from './component/activity-log/activity-log.component';

const routes: Routes = [

  {
    path: '',
    component: OpeningPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'signUp',
    component: SignupPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'activityLog',
    component: ActivityLogComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
