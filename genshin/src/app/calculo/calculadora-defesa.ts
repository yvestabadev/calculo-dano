export class CalculadoraDefesa{
    static calcular(nivelPersonagem: number){
        return 1 - (950 / (5 * nivelPersonagem + 950 + 500));
    }
}