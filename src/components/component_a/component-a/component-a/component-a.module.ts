import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a.component';
import { Route, RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [ComponentAComponent],
  imports: [
    CommonModule
  ]
})

export class ComponentAModule { }
