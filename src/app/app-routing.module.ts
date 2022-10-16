import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './auth/loginpage/loginpage.component';
import { AuthGuard } from './guards/auth.guard';




const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
    //component:LoginpageComponent
  },
  {
    path: 'app',
    loadChildren: () => import('./app-recipes/app-recipes.module').then(m => m.AppRecipesModule),
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
