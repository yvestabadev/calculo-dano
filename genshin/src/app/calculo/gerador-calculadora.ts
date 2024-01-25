import { FormArray, FormGroup } from "@angular/forms";
import { MapeamentoReacoes } from "../tipos/mapeamento-reacoes";
import { Reacao } from "../tipos/reacao";
import { TipoReacao } from "../tipos/tipo-reacao";
import { Calculadora } from "./calculadora";
import { CalculadoraComum } from "./calculadora-comum";
import { PorcentagemTalento } from "./porcentagem-talento";

export class GeradorCalculadora {

    static instanciarCalculadora(reacao: Reacao, form: FormGroup): Calculadora {
        if (MapeamentoReacoes.tipoPorReacao.get(reacao) === TipoReacao.NENHUMA) {
            return new CalculadoraComum(form);
        }
        throw new Error("Não implementado");
    }
}