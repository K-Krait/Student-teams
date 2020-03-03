import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { startPageComponent } from '../Сomponents/startPage/startPage.component';
import { mainPageComponent } from '../Сomponents/mainPage/mainPage.component';
import { notFoundPageComponent } from '..//Сomponents/notFoundPage/notFoundPage.component';


const appRoutes: Routes = [
  { path: '', component: startPageComponent },
  { path: 'main', component: mainPageComponent },
  { path: '**', component: notFoundPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
