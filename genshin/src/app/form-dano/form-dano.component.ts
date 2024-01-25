import { Component, Input, OnInit } from '@angular/core';
import { Reacao } from '../tipos/reacao';
import { TipoReacao } from '../tipos/tipo-reacao';
import { MapeamentoReacoes } from '../tipos/mapeamento-reacoes';
import { PorcentagemTalento } from '../calculo/porcentagem-talento';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-dano',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-dano.component.html',
  styleUrl: './form-dano.component.css'
})
export class FormDanoComponent{

  @Input()
  reacao?: Reacao;
  poderHabilidades: PorcentagemTalento[] = [new PorcentagemTalento(0.0, 0.0)];
  campos?: string[];
  form!: FormGroup;

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
      nivel: [0]
    });
  }

  public tipoReacao(): TipoReacao | undefined{
    return MapeamentoReacoes.tipoPorReacao.get(this.reacao || Reacao.NENHUMA);
  }

  public calcular(): void{
    console.log(this.form);
  }

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

  get reacaoTransformativa(){
    return TipoReacao.TRANSFORMATIVA;
  }

}
