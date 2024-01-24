import { Elemento } from "./elemento";
import { Reacao } from "./reacao";

export class RelacaoReacaoElemento{
    static porElemento: Map<Elemento, Reacao[]>  = new Map([
        [Elemento.ANEMO, [Reacao.REDEMOINHO]],
        [Elemento.GEO, [Reacao.CRISTALIZACAO, Reacao.ESTILHACAR]],
        [Elemento.CRYO, [Reacao.CONGELAR, Reacao.SUPERCONDUCAO, Reacao.FUSAO]],
        [Elemento.ELECTRO, [Reacao.CATALISACAO, Reacao.INTENSIFICACAO, Reacao.ELETRICAMENTE_CARREGADO, Reacao.SUPERCONDUCAO, Reacao.SUPERFLORESCIMENTO, Reacao.SOBRECARGA]],
        [Elemento.HYDRO,[Reacao.ELETRICAMENTE_CARREGADO, Reacao.CONGELAR, Reacao.FLORESCIMENTO, Reacao.VAPORIZAR]],
        [Elemento.DENDRO,[Reacao.CATALISACAO, Reacao.QUEIMADURA, Reacao.PROPAGACAO, Reacao.GERMINACAO]],
        [Elemento.PYRO,[Reacao.GERMINACAO, Reacao.QUEIMADURA, Reacao.FUSAO, Reacao.SOBRECARGA, Reacao.VAPORIZAR]]
    ])
    //static porReacao: Map<Reacao, Elemento> = new Map();

}