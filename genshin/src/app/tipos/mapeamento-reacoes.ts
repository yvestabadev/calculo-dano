import { Elemento } from "./elemento";
import { Reacao } from "./reacao";
import { TipoReacao } from "./tipo-reacao";

export class MapeamentoReacoes{
    static porElemento: Map<Elemento, Reacao[]>  = new Map([
        [Elemento.ANEMO, [Reacao.REDEMOINHO]],
        [Elemento.GEO, [Reacao.CRISTALIZACAO, Reacao.ESTILHACAR]],
        [Elemento.CRYO, [Reacao.CONGELAR, Reacao.SUPERCONDUCAO, Reacao.FUSAO]],
        [Elemento.ELECTRO, [Reacao.CATALISACAO, Reacao.INTENSIFICACAO, Reacao.ELETRICAMENTE_CARREGADO, Reacao.SUPERCONDUCAO, Reacao.SUPERFLORESCIMENTO, Reacao.SOBRECARGA]],
        [Elemento.HYDRO,[Reacao.ELETRICAMENTE_CARREGADO, Reacao.CONGELAR, Reacao.FLORESCIMENTO, Reacao.VAPORIZAR]],
        [Elemento.DENDRO,[Reacao.CATALISACAO, Reacao.QUEIMADURA, Reacao.PROPAGACAO, Reacao.GERMINACAO]],
        [Elemento.PYRO,[Reacao.GERMINACAO, Reacao.QUEIMADURA, Reacao.FUSAO, Reacao.SOBRECARGA, Reacao.VAPORIZAR]],
        [Elemento.NENHUM,[Reacao.NENHUMA, Reacao.ESTILHACAR]]
    ])
    static tipoPorReacao: Map<Reacao, TipoReacao> = new Map([
        [Reacao.SOBRECARGA, TipoReacao.TRANSFORMATIVA],
        [Reacao.ELETRICAMENTE_CARREGADO, TipoReacao.TRANSFORMATIVA],
        [Reacao.SUPERCONDUCAO, TipoReacao.TRANSFORMATIVA],
        [Reacao.CONGELAR, TipoReacao.NENHUMA],
        [Reacao.ESTILHACAR, TipoReacao.TRANSFORMATIVA],
        [Reacao.REDEMOINHO, TipoReacao.TRANSFORMATIVA],
        [Reacao.CRISTALIZACAO, TipoReacao.NENHUMA],
        [Reacao.QUEIMADURA, TipoReacao.TRANSFORMATIVA],
        [Reacao.FLORESCIMENTO, TipoReacao.TRANSFORMATIVA],
        [Reacao.GERMINACAO, TipoReacao.TRANSFORMATIVA],
        [Reacao.SUPERFLORESCIMENTO, TipoReacao.TRANSFORMATIVA],
        [Reacao.VAPORIZAR, TipoReacao.AMPLIFICADORA],
        [Reacao.FUSAO, TipoReacao.AMPLIFICADORA],
        [Reacao.CATALISACAO, TipoReacao.AMPLIFICADORA],
        [Reacao.PROPAGACAO, TipoReacao.AMPLIFICADORA],
        [Reacao.INTENSIFICACAO, TipoReacao.AMPLIFICADORA],
        [Reacao.NENHUMA, TipoReacao.NENHUMA]
    ]);

}