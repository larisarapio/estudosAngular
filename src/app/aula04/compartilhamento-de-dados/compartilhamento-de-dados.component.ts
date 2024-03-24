import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compartilhamento-de-dados',
  standalone: true,
  imports: [],
  templateUrl: './compartilhamento-de-dados.component.html',
  styleUrl: './compartilhamento-de-dados.component.scss'
})
export class CompartilhamentoDeDadosComponent {
  @Input() name: string = '';
  @Input() userInformatation!: { email: string; idade: number };
}
