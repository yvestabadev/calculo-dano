import { FormGroup } from "@angular/forms";
import { Calculadora } from "./calculadora";
import { Reacao } from "../tipos/reacao";
import { MultiplicadorNivel } from "./multiplicador-nivel";
import { CalculadoraComum } from "./calculadora-comum";

export class CalculadoraTransformadora extends CalculadoraComum{
    reacao: Reacao;
    maestriaElemental: number;
    bonusReacao: number;
    multReacao!: number;

    constructor(form: FormGroup, reacao: Reacao){
        super(form);
        this.maestriaElemental = form.get('maestriaElemental')?.value;
        this.reacao = reacao;
        this.bonusReacao = form.get('bonusReacao')?.value / 100;
    }

    override calcular(): number {
        switch(this.reacao){
            case Reacao.QUEIMADURA:
                this.multReacao = 0.25;
                break;
            case Reacao.SUPERCONDUCAO:
                this.multReacao = 0.5;
                break;
            case Reacao.REDEMOINHO:
                this.multReacao = 0.6;
                break;
            case Reacao.ELETRICAMENTE_CARREGADO:
                this.multReacao = 1.2;
                break;
            case Reacao.ESTILHACAR:
                this.multReacao = 1.5;
                break;
            case Reacao.SOBRECARGA:
            case Reacao.FLORESCIMENTO:
                this.multReacao = 2;
                break;
            case Reacao.SUPERFLORESCIMENTO:
            case Reacao.GERMINACAO:
                this.multReacao = 3;
        }
        return super.calcular() + this.multReacao * MultiplicadorNivel.valor(this.nivel) * 
            (1 + (this.bonusMaestriaElemental() + this.bonusReacao));
    }

    override explicacao(): string {
        return super.explicacao() + '@A reação transformativa tem o dano separado do ataque normal, '+ 
        'sendo assim, o dano a seguir é aplicado separadamente: ' +
        '@O bônus da maestria elemental se calcula pela fórmula 16 x (ME=' + this.maestriaElemental + 
        '/ ME + 2000))@O bônus de reação fornecido soma-se ao bônus da maestria, então: bônus de maestria elemental (' +
        (this.bonusMaestriaElemental() * 100).toFixed(2).replace('.',',') + '%) + bônus de reação (' + 
        (this.bonusReacao * 100).toFixed().replace('.', ',') + '%) = ' + 
        ((this.bonusMaestriaElemental() + this.bonusReacao) * 100).toFixed(2).replace('.',',') +
        '%.@Para personagens nível ' + this.nivel + ', aplica-se uma multiplicação de ' +
        MultiplicadorNivel.valor(this.nivel).toFixed(2).replace('.',',') + '.' +
        '@Por último, o valor da multiplicação natural da reação, que é ' + this.multReacao.toFixed(2).replace('.',',') +
        '.@O dano separado da reação é de ' + (this.multReacao * MultiplicadorNivel.valor(this.nivel) * 
        (1 + (this.bonusMaestriaElemental() + this.bonusReacao))).toFixed(2).replace('.',',') + 
        ' e o montante é ' + this.calcular().toFixed(0); 
    }

    private bonusMaestriaElemental(): number{
        return 16 * (this.maestriaElemental / (this.maestriaElemental + 2000));
    }

}