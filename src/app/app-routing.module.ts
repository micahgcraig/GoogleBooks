import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookformComponent } from './components/bookform/bookform.component';

import { HomeComponent } from './components/home/home/home.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'newbook',
    component: BookformComponent,
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchresultsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
