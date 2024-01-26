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

    explicacao(): string {
        let danoBaseMultiplicado = this.base * this.multiplicadorDanoBase;
        let danoBaseSomado = danoBaseMultiplicado * (1 + this.somadorDanoBase);
        let danoComBonusElemental = danoBaseSomado * this.bonusDanoElemento;
        let mediaDanoCritico = (this.taxaCritica * this.danoCritico) * 100;
        let resultadoSemDefesa = danoComBonusElemental * (1 + (this.taxaCritica * this.danoCritico));
        return 'Primeiro se calcula o dano original do talento, multiplicando a porcentagem pelo valor do atributo em questão (ATK, HP, DEF), que resultou em ' +
            this.base + '@Depois se aplica a modificação do dano original (' + (this.multiplicadorDanoBase * 100).toFixed(2).replace('.',',') + '% = '+ 
            danoBaseMultiplicado.toFixed(2).replace('.',',') +')@' +
            'Soma-se esse resultado com o somador de dano (' + (this.somadorDanoBase * 100).toFixed(2).replace('.',',') + '% = ' 
            + danoBaseSomado.toFixed(0) + ')@' + 
            'Sobre este resultado, aplica-se o bônus de dano do elemento correspondente (' + 
            (this.bonusDanoElemento * 100).toFixed(2).replace('.',',') + '% = ' 
            + danoComBonusElemental.toFixed(0) + ')@Depois, a média do dano crítico de acordo com a taxa crítica (' + 
            (this.taxaCritica * 100).toFixed(2).replace('.',',') +
            '% de ' + (this.danoCritico * 100).toFixed(2).replace('.',',') + '% = ' 
            + mediaDanoCritico.toFixed(0) +'%) resultando em ' + resultadoSemDefesa.toFixed(0) +
            '@Aplica-se também a subtração da defesa média de inimigos de nível 90 de acordo com o nível informado do personagem ('+
            this.nivel +') que é aproximadamente ' + CalculadoraDefesa.valorDefPorcentagem(this.nivel) + ', resultando em ' +
            + (resultadoSemDefesa * CalculadoraDefesa.calcular(this.nivel)).toFixed(0);
    }

    private verificaNuloMultiplicador(valor: number): number {
        if (valor === 0) {
            return 1;
        }
        return valor / 100;
    }

}