import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compartilhamento-de-dados',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './compartilhamento-de-dados.component.html',
  styleUrl: './compartilhamento-de-dados.component.scss'
})
export class CompartilhamentoDeDadosComponent {
  @Input() userInformatation!: { email: string; };
}
