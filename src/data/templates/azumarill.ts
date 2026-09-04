import type { PokemonTemplateSet } from '../../lib/types'

const azumarill: PokemonTemplateSet = {
  internalName: 'AZUMARILL',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'HUGEPOWER',
      item: 'SITRUSBERRY',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BELLYDRUM', 'AQUAJET', 'PLAYROUGH', 'LIQUIDATION'],
      justification:
        'Potencia duplica el Ataque de Azumarill, así que su base 50 rinde como 100 y con Tambor lo lleva al tope. PS 100 y defensas 80/80 le dan turnos para usar Tambor, y la Baya Zidra recupera un cuarto de los PS justo cuando el retroceso lo deja al 50 %, dejándolo en un punto seguro tras el setup. Acua Jet es prioridad +1 y la clave del plan porque su Velocidad 50 no supera a casi nadie: tras Tambor barre con prioridad. Carantoña y Agua Fría son el STAB de pegada completa cuando puede permitirse un turno lento. Naturaleza Firme y máximo Ataque; el reparto en PS asegura sobrevivir para armar el Tambor.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme quita el objeto rival y castiga a Psíquicos y Fantasmas, para un uso más de utilidad sin Tambor.',
          replaces: 'LIQUIDATION'
        },
        {
          slot: 'move',
          value: 'SUPERPOWER',
          note: 'Fuerza Bruta rompe a los Acero que aguantan Agua y Hada, a cambio de bajarse Ataque y Defensa.',
          replaces: 'LIQUIDATION'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección convierte a Azumarill en rompemuros inmediato con prioridad Acua Jet; en ese caso Tambor se cambia por Desarme.'
        }
      ]
    }
  ]
}

export default azumarill
