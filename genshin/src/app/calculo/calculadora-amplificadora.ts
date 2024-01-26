import { FormGroup } from "@angular/forms";
import { CalculadoraComum } from "./calculadora-comum";
import { Reacao } from "../tipos/reacao";
import { CalculadoraDefesa } from "./calculadora-defesa";

export class CalculadoraAmplificadora extends CalculadoraComum{

    reacao!: Reacao;
    maestriaElemental!: number;
    bonusReacao!: number;

    constructor(form: FormGroup, reacao: Reacao){
        super(form);
        this.reacao = reacao;
        this.maestriaElemental = form.get('maestriaElemental')?.value;
        this.bonusReacao = form.get('bonusReacao')?.value / 100;
        switch(reacao){
            case Reacao.FUSAO:
            case Reacao.VAPORIZAR:
                this.multiplicadorReacao = 1.75 * (1 + (this.bonusFusaoVaporizar()) + this.bonusReacao); 
                break;            
            case Reacao.PROPAGACAO:
                this.multiplicadorReacao = 1.25 * (1 + (this.bonusPropagacaoIntensificacao()) + this.bonusReacao);
                break;
            case Reacao.INTENSIFICACAO:
                this.multiplicadorReacao = 1.15 * (1 + (this.bonusPropagacaoIntensificacao()) + this.bonusReacao);
        }
    }

    override explicacao(): string {
        return super.explicacao() + '@O bônus da reação elementar amplificadora é aplicado em cima do montante total. ' +
            'A maestria elemental concede o bônus da reacao ' + this.reacao + ' através da seguinte fórmula: @' +
            this.explicacaoMaestriaElemental() + '@A porcentagem é somada pelo bônus de reação fornecido (' + 
            (this.bonusReacao * 100).toFixed(2).replace('.',',') + '%).@Em cima dessa soma, é aplicado o multiplicador padrão da reação, que é ' +
            this.multiplicadorDaReacao() + '.@O multiplicador final da reação é ' + 
            (this.multiplicadorReacao * 100).toFixed(2).replace('.',',') + '%.' +
            '@Aplicado ao montante temos o valor final de ' + this.calcular().toFixed(0);
    }

    private bonusFusaoVaporizar(): number{
        return 2.78 * (this.maestriaElemental / (this.maestriaElemental + 1400));
    }

    private bonusPropagacaoIntensificacao(){
        return 5 * (this.maestriaElemental / (this.maestriaElemental + 1200));
    }

    private explicacaoMaestriaElemental(): string{
        switch(this.reacao){
            case Reacao.FUSAO:
            case Reacao.VAPORIZAR:
                return '2,78 x ( ME (' + this.maestriaElemental + ') / (ME + 1400)), que é ' +
                    (this.bonusFusaoVaporizar() * 100).toFixed(2).replace('.',',') + '%';        
            case Reacao.PROPAGACAO:
            case Reacao.INTENSIFICACAO:
                return '5 x ( ME (' + this.maestriaElemental + ') / (ME + 1200)), que é ' + 
                    (this.bonusPropagacaoIntensificacao() * 100).toFixed(2).replace('.', ',') + '%';        
        }
        throw new Error("erro inesperado");
    }

    private multiplicadorDaReacao(): string{
        switch(this.reacao){
            case Reacao.FUSAO:
            case Reacao.VAPORIZAR:
                return '1,75';
            case Reacao.PROPAGACAO:
                return '1,25';
            case Reacao.INTENSIFICACAO:
                return '1,15';
        }
        throw new Error('Erro inesperado');
    }
}