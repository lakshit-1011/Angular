import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './features/dashboard/dashboard';
import { UserManagement } from './features/user-management/user-management';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path:'',
    component:Layout,
    children :[
         {
          path:'dashboard',
          component:Dashboard
         },
         {
          path:'UserManagent',
          component:UserManagement
         },
    ]
  }
];
