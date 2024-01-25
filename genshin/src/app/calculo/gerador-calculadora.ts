import { FormArray, FormGroup } from "@angular/forms";
import { MapeamentoReacoes } from "../tipos/mapeamento-reacoes";
import { Reacao } from "../tipos/reacao";
import { TipoReacao } from "../tipos/tipo-reacao";
import { Calculadora } from "./calculadora";
import { CalculadoraComum } from "./calculadora-comum";
import { PorcentagemTalento } from "./porcentagem-talento";
import { CalculadoraAmplificadora } from "./calculadora-amplificadora";

export class GeradorCalculadora {

    static instanciarCalculadora(reacao: Reacao, form: FormGroup): Calculadora {
        switch(MapeamentoReacoes.tipoPorReacao.get(reacao)){
            case TipoReacao.NENHUMA:
                return new CalculadoraComum(form);
            case TipoReacao.AMPLIFICADORA:
                return new CalculadoraAmplificadora(form, reacao);
            case TipoReacao.TRANSFORMATIVA:
                throw new Error("Não implementado");
        }
        throw new Error("Erro inesperado");
    }
}