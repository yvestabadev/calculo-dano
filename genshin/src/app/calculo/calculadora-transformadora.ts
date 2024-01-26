import { FormGroup } from "@angular/forms";
import { Calculadora } from "./calculadora";
import { Reacao } from "../tipos/reacao";
import { MultiplicadorNivel } from "./multiplicador-nivel";

export class CalculadoraTransformadora implements Calculadora{
    nivel: number;
    reacao: Reacao;
    maestriaElemental: number;
    bonusReacao: number;

    constructor(form: FormGroup, reacao: Reacao){
        this.nivel = form.get('nivel')?.value;
        this.maestriaElemental = form.get('maestriaElemental')?.value;
        this.reacao = reacao;
        this.bonusReacao = form.get('bonusReacao')?.value / 100;
    }

    calcular(): number {
        let multiplicadorReacao = 1;
        switch(this.reacao){
            case Reacao.QUEIMADURA:
                multiplicadorReacao = 0.25;
                break;
            case Reacao.SUPERCONDUCAO:
                multiplicadorReacao = 0.5;
                break;
            case Reacao.REDEMOINHO:
                multiplicadorReacao = 0.6;
                break;
            case Reacao.ELETRICAMENTE_CARREGADO:
                multiplicadorReacao = 1.2;
                break;
            case Reacao.ESTILHACAR:
                multiplicadorReacao = 1.5;
                break;
            case Reacao.SOBRECARGA:
            case Reacao.FLORESCIMENTO:
                multiplicadorReacao = 2;
                break;
            case Reacao.SUPERFLORESCIMENTO:
            case Reacao.GERMINACAO:
                multiplicadorReacao = 3;
        }
        return multiplicadorReacao * MultiplicadorNivel.valor(this.nivel) * 
            (1 + (this.bonusMaestriaElemental() + this.bonusReacao));
    }

    explicacao(): string {
        throw new Error("Method not implemented.");
    }

    private bonusMaestriaElemental(): number{
        return 16 * (this.maestriaElemental / (this.maestriaElemental + 2000));
    }

}