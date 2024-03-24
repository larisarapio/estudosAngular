import { Component } from '@angular/core';
import { ButtonComponent } from '../../aula02/button/button.component';

@Component({
  selector: 'app-interpolacao-dados',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './interpolacao-dados.component.html',
  styleUrl: './interpolacao-dados.component.scss'
})
export class InterpolacaoDadosComponent {
   name: string = 'Larissa'
   frutas = ["maca", "banana"]

   pessoa = {
    idade: 23,
    name: 'Lari'
   }

}
