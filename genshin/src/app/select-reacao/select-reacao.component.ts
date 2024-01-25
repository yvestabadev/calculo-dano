import { Component, EventEmitter, Output } from '@angular/core';
import { Elemento } from '../tipos/elemento';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Reacao } from '../tipos/reacao';
import { MapeamentoReacoes } from '../tipos/mapeamento-reacoes';

@Component({
  selector: 'app-select-reacao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-reacao.component.html',
  styleUrl: './select-reacao.component.css'
})
export class SelectReacaoComponent {

  elementos:Elemento[] = Object.values(Elemento);
  elementoSelecionado: Elemento | undefined;
  reacoes:Reacao[] = Object.values(Reacao);
  reacaoSelecionada: Reacao | undefined;
  @Output() outputReacao: EventEmitter<Reacao> = new EventEmitter<Reacao>;

  public filtrarReacao(elemento: Elemento | undefined): void{
    this.reacaoSelecionada = undefined;
    if(elemento === undefined) return;
    this.reacoes = MapeamentoReacoes.porElemento.get(elemento) ?? this.reacoes;
  }
  
  public emitir() {
    console.log(this.reacaoSelecionada);
    this.outputReacao.emit(this.reacaoSelecionada);
  }
}
