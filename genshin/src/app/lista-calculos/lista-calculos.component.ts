import { Component, Input, OnInit } from '@angular/core';
import { Calculadora } from '../calculo/calculadora';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-calculos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-calculos.component.html',
  styleUrl: './lista-calculos.component.css'
})
export class ListaCalculosComponent implements OnInit{


  @Input()
  calculadora!: Calculadora;

  @Input()
  index!: number;

  resultado!: number;
  explicacao!: string[];

  ngOnInit(): void {
    this.resultado = Math.round(this.calculadora.calcular());
    //parágrafos
    this.explicacao = this.calculadora.explicacao().split('@');
  }
  
}
