import { FormArray, FormGroup } from "@angular/forms";
import { Calculadora } from "./calculadora";
import { PorcentagemTalento } from "./porcentagem-talento";
import { CalculadoraDefesa } from "./calculadora-defesa";

export class CalculadoraComum implements Calculadora{
    base: number;
    multiplicadorDanoBase: number;
    somadorDanoBase: number;
    bonusDanoElemento: number;
    multiplicadorReacao: number = 1;
    taxaCritica: number;
    danoCritico: number;
    nivel: number;

    constructor(form: FormGroup){
        let valorTalento = form.get('valorTalento') as FormArray;
        let valorPoder = form.get('valorPoder') as FormArray;
        let talentos = [] as PorcentagemTalento[];
        for (var i = 0; i < valorTalento.length; i++) {
            talentos.push(new PorcentagemTalento(valorTalento.at(i).value, valorPoder.at(i).value));
        }

        this.base = talentos.map(key => key.porcentagem * key.valor / 100).reduce((sum, num) => sum + num, 0);
        this.multiplicadorDanoBase = this.verificaNuloMultiplicador(form.get('multiplicaDanoBase')?.value);
        this.somadorDanoBase = form.get('somaDanoBase')?.value / 100;
        this.bonusDanoElemento = form.get('bonusDanoElemento')?.value / 100 + 1;
        this.taxaCritica = form.get('taxaCritica')?.value / 100;
        this.danoCritico = form.get('danoCritico')?.value / 100;
        this.nivel = form.get('nivel')?.value;
    }
    
    calcular(): number {
        return this.base * this.multiplicadorDanoBase * (1 + this.somadorDanoBase) 
            * this.bonusDanoElemento * this.multiplicadorReacao 
            * (1 + (this.taxaCritica * this.danoCritico)) * CalculadoraDefesa.calcular(this.nivel);
    }

    private verificaNuloMultiplicador(valor: number): number {
        if (valor === 0) {
            return 1;
        }
        return valor / 100;
    }

}