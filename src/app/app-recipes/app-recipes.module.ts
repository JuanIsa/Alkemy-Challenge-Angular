import { NgModule } from '@angular/core';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { DetailspageComponent } from './pages/detailspage/detailspage.component';
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';

import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

import { CommonModule } from '@angular/common';
import { AppRecipesRoutingModule } from './app-recipes-routing.module';
import { MaterialModule } from '../modules/material/material.module';
import { SearchRecipesComponent } from './components/search-recipes/search-recipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardgridComponent } from './components/cardgrid/cardgrid.component';

@NgModule({
  declarations: [
    HomepageComponent,
    DetailspageComponent,
    NotfoundpageComponent,

    HeaderComponent,
    CardComponent,
    SearchRecipesComponent,
    CardgridComponent
  ],
  imports: [
    CommonModule,
    AppRecipesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AppRecipesModule { }
