import type { PokemonTemplateSet } from '../../lib/types'

const fezandipiti: PokemonTemplateSet = {
  internalName: 'FEZANDIPITI',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'viable',
      ability: 'TOXICCHAIN',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 0, 0, 252, 4],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['UTURN', 'ROOST', 'PLAYROUGH', 'TAUNT'],
      justification:
        'Fezandipiti en Añil tiene su mejor característica en Defensa Especial 125, el tipo Veneno/Hada y PS 88: un perfil claramente de pivote defensivo especial, no de rompemuros, porque sus ofensivas (At. 91 / At. Esp. 70) son modestas. Cadena Tóxica envenena gravemente en el contacto, así que Ida y Vuelta y Cachete pueden sembrar el veneno grave al golpear. Ida y Vuelta reposiciona sin regalar el turno, Roost ofrece la recuperación fiable, Mofa frena trampas y estados del rival, y Cachete (90, STAB Hada) castiga a Siniestro y Dragón además de bajar el Ataque. Naturaleza Cauta con reparto en PS y Def. Esp. apuntala justo la estadística que lo define; la Velocidad 99 es suficiente para pivotar por delante de buena parte de los muros. El rol es viable: cumple como revulsivo defensivo especial más que como amenaza ofensiva.',
      alternatives: [
        {
          slot: 'ability',
          value: 'TECHNICIAN',
          note: 'Experto potencia sus movimientos de 60 o menos (Ataque Rápido, Doble Golpe Alado, Sorpresa) en una variante más ofensiva de pivot.'
        },
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Tóxico garantiza el veneno grave sin depender de la Cadena Tóxica por contacto, a cambio de Cachete en el slot de Hada.',
          replaces: 'PLAYROUGH'
        }
      ]
    }
  ]
}

export default fezandipiti
