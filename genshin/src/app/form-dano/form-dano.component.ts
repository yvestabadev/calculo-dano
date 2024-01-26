import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reacao } from '../tipos/reacao';
import { TipoReacao } from '../tipos/tipo-reacao';
import { MapeamentoReacoes } from '../tipos/mapeamento-reacoes';
import { PorcentagemTalento } from '../calculo/porcentagem-talento';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GeradorCalculadora } from '../calculo/gerador-calculadora';
import { BotaoAjudaComponent } from '../botao-ajuda/botao-ajuda.component';
import { Calculadora } from '../calculo/calculadora';

@Component({
  selector: 'app-form-dano',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, BotaoAjudaComponent],
  templateUrl: './form-dano.component.html',
  styleUrl: './form-dano.component.css'
})
export class FormDanoComponent{

  @Input()
  reacao!: Reacao;
  poderHabilidades: PorcentagemTalento[] = [new PorcentagemTalento(0.0, 0.0)];
  campos?: string[];
  form!: FormGroup;
  @Output() resultadoEmitter: EventEmitter<Calculadora> = new EventEmitter<Calculadora>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      valorTalento: this.fb.array([0]),
      valorPoder: this.fb.array([0]),
      multiplicaDanoBase: [0],
      somaDanoBase: [0],
      bonusDanoElemento: [0],
      taxaCritica: [5],
      danoCritico: [50],
      maestriaElemental: [0],
      bonusReacao: [0],
      nivel: [0]
    });
  }

  public tipoReacao(): TipoReacao | undefined{
    return MapeamentoReacoes.tipoPorReacao.get(this.reacao);
  }

  public calcular(): void{
    this.resultadoEmitter.emit(GeradorCalculadora.instanciarCalculadora(this.reacao, this.form));
  }

  //lidando com formArray início
  get talento(){
    return this.form.get('valorTalento') as FormArray;
  } 

  get poder(){
    return this.form.get('valorPoder') as FormArray;
  } 

  public addTalento(){
    this.talento.push(this.fb.control(0));
    this.poder.push(this.fb.control(0));
  }

  public removeTalento(i: number){
    this.talento.removeAt(i);
  }
  //lidando com formArray fim

  //usando get para retornar ENUM
  get reacaoTransformativa(){
    return TipoReacao.TRANSFORMATIVA;
  }

  get reacaoSemAdicao(){
    return TipoReacao.NENHUMA;
  }

}
