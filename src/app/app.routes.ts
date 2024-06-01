import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { MainComponent } from './shared/layouts/main/main.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'feed',
  //   pathMatch: 'full',
  // },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
  },
];
