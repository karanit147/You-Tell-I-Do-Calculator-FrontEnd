import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpeningPageComponent } from './component/opening-page/opening-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { SignupPageComponent } from './component/signup-page/signup-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ActivityLogComponent } from './component/activity-log/activity-log.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component'; 


@NgModule({
  declarations: [
    AppComponent,
    OpeningPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardComponent,
    ActivityLogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
