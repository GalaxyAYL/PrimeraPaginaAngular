import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cmb1(){
    this.router.navigate(['paginaUno'])
  }
  cmbP(){
    this.router.navigate(['paginaPrincipal'])
  }
}
