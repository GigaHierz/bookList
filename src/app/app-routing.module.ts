import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';


const routes: Routes = [
  { path: 'list-page', component: ListPageComponent, data: { title: "Home" }},
  { path: 'detail-page/:id', component: DetailPageComponent, data: { title: "Details" }},
  { path: '', redirectTo: '/list-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
