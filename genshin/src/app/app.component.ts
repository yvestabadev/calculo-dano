import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectReacaoComponent } from './select-reacao/select-reacao.component';
import { FormDanoComponent } from './form-dano/form-dano.component';
import { Reacao } from './tipos/reacao';
import { CommonModule } from '@angular/common';
import { ListaCalculosComponent } from './lista-calculos/lista-calculos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectReacaoComponent, FormDanoComponent, CommonModule, ListaCalculosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  reacao?: Reacao;
  resultados: number[] = [];
  @ViewChild('selectReacao') selectReacao!: SelectReacaoComponent;
  esconderSelect: boolean = false;

  public defineReacao(reacao: Reacao) {
    this.reacao = reacao;
  }
  adicionarResultado(resultado: number) {
    this.resultados.push(resultado);
    this.selectReacao.reset();
    this.esconderSelect = true;
  }
  title = 'genshin';
}
