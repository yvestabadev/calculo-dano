import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-calculos',
  standalone: true,
  imports: [],
  templateUrl: './lista-calculos.component.html',
  styleUrl: './lista-calculos.component.css'
})
export class ListaCalculosComponent {

  @Input()
  resultado!: number;

  @Input()
  index!: number;
  
}
