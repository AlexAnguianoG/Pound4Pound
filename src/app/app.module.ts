import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";

// Import Services
import { CaseService } from './services/CaseService';
import { HttpClientModule } from '@angular/common/http';
//import {QuestionsService} from "./services/questions.service";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './services/UserService';
import { AuthenticationService } from './services/AuthenticationService';
import { UsersComponent } from './views/users/users/users.component';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NutriologistDashboardComponent } from './views/nutriologist-dashboard/nutriologist-dashboard.component';
import { PlanViewComponent } from './views/plan-view/plan-view.component';
import { PlanClientViewComponent } from './views/plan-client-view/plan-client-view.component';
import { StatisticsComponent } from './views/statistics/statistics.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    ReactiveFormsModule,
    FormsModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    NgxSpinnerModule

  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    NutriologistDashboardComponent,
    PlanViewComponent,
    PlanClientViewComponent,
    StatisticsComponent,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  }, CaseService, UserService, AuthenticationService, AuthGuard, AdminGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
