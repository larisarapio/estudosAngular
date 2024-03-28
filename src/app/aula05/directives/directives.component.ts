import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  classes = ['green-title', 'small-title' ]

}
