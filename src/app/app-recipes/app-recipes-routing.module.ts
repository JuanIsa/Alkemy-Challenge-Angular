import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailspageComponent } from './pages/detailspage/detailspage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
      },
      {
        path: 'home',
        component: HomepageComponent
      },
      {
        path: 'recipe_detail/:id',
        component:DetailspageComponent
      },
      {
        path: '**',
        component: NotfoundpageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRecipesRoutingModule { }
