import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './aula02/button/button.component';
import { InterpolacaoDadosComponent } from './aula03/interpolacao-dados/interpolacao-dados.component';
import { CompartilhamentoDeDadosComponent } from './aula04/compartilhamento-de-dados/compartilhamento-de-dados.component';
import { DirectivesComponent } from './aula05/directives/directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, InterpolacaoDadosComponent, CompartilhamentoDeDadosComponent, DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Revisão angular';

  userName = 'Angular.'

  user = {
    email: 'angular@gmail.com'
  }
}
