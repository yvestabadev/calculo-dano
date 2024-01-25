import { Calculadora } from "./calculadora";
import { PorcentagemTalento } from "./porcentagem-talento";

export class CalculadoraComum implements Calculadora{
    base: number;
    multiplicadorDanoBase: number;
    somadorDanoBase: number;
    bonusDanoElemento: number;
    multiplicadorReacao: number = 1;
    taxaCritica: number;
    danoCritico: number;

    constructor(talentos: PorcentagemTalento[],
        multiplicadorDanoBase: number,
        somadorDanoBase: number,
        bonusDanoElemento: number,
        taxaCritica: number,
        danoCritico: number){
            this.base = talentos.map(key => key.porcentagem * key.valor / 100).reduce((sum, num) => sum + num, 0);
            this.multiplicadorDanoBase = multiplicadorDanoBase;
            this.somadorDanoBase = somadorDanoBase;
            this.bonusDanoElemento = bonusDanoElemento;
            this.taxaCritica = taxaCritica;
            this.danoCritico = danoCritico;
        }
    
    calcular(): number {
        return (this.base * this.multiplicadorDanoBase + this.somadorDanoBase) 
            * this.bonusDanoElemento * this.multiplicadorReacao 
            * (1 + (this.taxaCritica * this.danoCritico / 10000));
    }

}