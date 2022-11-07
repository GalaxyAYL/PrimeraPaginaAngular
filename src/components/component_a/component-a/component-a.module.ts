import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { Route, RouterModule, Routes } from '@angular/router';



NgModule({
  declarations: [ComponentAComponent],
  imports: [
    CommonModule
  ]
})

const routes: Routes =[
{path: "Algo A", component: ComponentAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
}

)

export class ComponentAModule { }
