import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AdminGuard } from './services/admin.guard';
import { AuthGuard } from './services/auth.guard';
import { UsersComponent } from './views/users/users/users.component';
import { NutriologistDashboardComponent } from './views/nutriologist-dashboard/nutriologist-dashboard.component';
import { PlanViewComponent } from './views/plan-view/plan-view.component'
import { PlanClientViewComponent } from './views/plan-client-view/plan-client-view.component'
import { StatisticsComponent } from './views/statistics/statistics.component'


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  

  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
    {
      path: 'nutriologistDashboard',
      component: NutriologistDashboardComponent,
      canActivate: [AuthGuard],
      data: {
        title: 'Nutriologist Page'
      }
    },
    {
      path: 'plan-client-view',
      component: PlanClientViewComponent,
      canActivate: [AuthGuard],
      data: {
        title: 'Plan Page'
      }
    },
    {
      path: 'plan-view',
      component: PlanViewComponent,
      canActivate: [AuthGuard],
      data: {
        title: 'Plan Details'
      }
    },
    {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Plan Details'
    }
  },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
       {
    path: 'users',
      component: UsersComponent,
      canActivate: [AdminGuard],
      data: {
        title: 'Users Page'
      }
    },
      
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
