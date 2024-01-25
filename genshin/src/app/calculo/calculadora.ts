export interface Calculadora{
    base: number;
    multiplicadorDanoBase: number;
    somadorDanoBase: number;
    bonusDanoElemento: number;
    multiplicadorReacao: number;
    taxaCritica: number;
    danoCritico: number;
    calcular():number;
}