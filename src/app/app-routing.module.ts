import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentAComponent } from 'src/components/component_a/component-a/component-a/component-a.component';
import { ComponentBComponent } from 'src/components/component_b/component-b/component-b/component-b.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'paginaUno', component: ComponentAComponent
  }
  ,
  {
    path: 'paginaDos', component: ComponentBComponent
  }
  ,
  {
    path: 'paginaPrincipal', component:  AppComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
