import { Component, Input, OnInit } from '@angular/core';
import { Calculadora } from '../calculo/calculadora';

@Component({
  selector: 'app-lista-calculos',
  standalone: true,
  imports: [],
  templateUrl: './lista-calculos.component.html',
  styleUrl: './lista-calculos.component.css'
})
export class ListaCalculosComponent implements OnInit{


  @Input()
  calculadora!: Calculadora;

  @Input()
  index!: number;

  resultado!: number;
  explicacao!: string;

  ngOnInit(): void {
    this.resultado = Math.round(this.calculadora.calcular());
    this.explicacao = this.calculadora.explicacao();
  }
  
}
