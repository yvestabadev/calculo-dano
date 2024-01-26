import { FormGroup } from "@angular/forms";
import { CalculadoraComum } from "./calculadora-comum";
import { Reacao } from "../tipos/reacao";

export class CalculadoraAmplificadora extends CalculadoraComum{

    constructor(form: FormGroup, reacao: Reacao){
        super(form);
        let maestriaElemental = form.get('maestriaElemental')?.value;
        let bonusReacao = form.get('bonusReacao')?.value;
        switch(reacao){
            case Reacao.FUSAO:
            case Reacao.VAPORIZAR:
                this.multiplicadorReacao = 1.75 * (1 + (this.bonusFusaoVaporizar(maestriaElemental)) + bonusReacao); 
                break;            
            case Reacao.PROPAGACAO:
                this.multiplicadorReacao = 1.25 * (1 + (this.bonusPropagacaoIntensificacao(maestriaElemental)) + bonusReacao);
                break;
            case Reacao.INTENSIFICACAO:
                this.multiplicadorReacao = 1.15 * (1 + (this.bonusPropagacaoIntensificacao(maestriaElemental)) + bonusReacao);
        }
    }

    private bonusFusaoVaporizar(maestrialElemental: number): number{
        return 2.78 * (maestrialElemental / (maestrialElemental + 1400));
    }

    private bonusPropagacaoIntensificacao(maestrialElemental: number){
        return 5 * (maestrialElemental / (maestrialElemental + 1200));
    }
}