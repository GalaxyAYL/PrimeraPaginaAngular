import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentAComponent } from 'src/components/component_a/component-a/component-a/component-a.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  cmb1(){
    this.router.navigate(['paginaUno'])
  }
  cmb2(){
    this.router.navigate(['paginaDos'])
  }
}
