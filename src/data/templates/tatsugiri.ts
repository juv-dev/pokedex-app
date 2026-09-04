import type { PokemonTemplateSet } from '../../lib/types'

const tatsugiri: PokemonTemplateSet = {
  internalName: 'TATSUGIRI',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'viable',
      ability: 'STORMDRAIN',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'DRACOMETEOR', 'SURF', 'RAPIDSPIN'],
      justification:
        'Tatsugiri vuelca su Ataque Especial 120 en un set de barrido: Colector atrae los movimientos de tipo Agua enemigos, anulándolos y subiendo un nivel el Ataque Especial, lo que le da tanto un boost gratuito como inmunidad ante un tipo ofensivo común. Maquinación eleva el Ataque Especial a +2 y Cometa Draco es el STAB de dragón de 130 de potencia para castigar en turnos de cierre, aunque baja el Ataque Especial en el proceso; Surf es la STAB de agua estable, y Giro Rápido limpia las trampas propias para que el barrido no se pague con desgaste. Naturaleza Modesta y 252 At. Esp. maximizan el daño, con 252 en Velocidad para explotar el 92 base sin depender del clima. Es viable y no óptimo porque la Velocidad 92 queda por debajo de los sweepers rápidos y el set sufre el descenso de Cometa Draco sin recuperación de momentum, por lo que depende de apoyar el cambio para montar.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo cubre a Dragón y Planta que resisten el set, cediendo la limpieza de trampas de Giro Rápido.',
          replaces: 'RAPIDSPIN'
        }
      ]
    }
  ]
}

export default tatsugiri
