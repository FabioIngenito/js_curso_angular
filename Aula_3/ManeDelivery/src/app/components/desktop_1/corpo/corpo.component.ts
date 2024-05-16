import { Component } from '@angular/core';
import { Cartao1Component } from './cartao-1/cartao-1.component';
import { Cartao2Component } from './cartao-2/cartao-2.component';
import { Cartao3Component } from './cartao-3/cartao-3.component';

@Component({
  selector: 'app-corpo',
  standalone: true,
  imports: [Cartao1Component, Cartao2Component, Cartao3Component],
  templateUrl: './corpo.component.html',
  styleUrl: './corpo.component.css',
})
export class CorpoComponent {}
