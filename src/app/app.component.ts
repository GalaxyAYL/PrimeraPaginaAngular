import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
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
export class AppComponent {
  title = 'pagina';
}
