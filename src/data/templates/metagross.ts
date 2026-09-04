import type { PokemonTemplateSet } from '../../lib/types'

const metagross: PokemonTemplateSet = {
  internalName: 'METAGROSS',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'IRONFIST',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['METEORMASH', 'BULLETPUNCH', 'EARTHQUAKE', 'ICEPUNCH'],
      justification:
        'Puño Férreo potencia un 20% Puño Meteoro, Puño Bala, Puño Hielo y Puño Trueno, así que casi todo el conjunto se beneficia. Puño Meteoro queda en 120 de potencia efectiva con 20% de subir el Ataque, Puño Bala da prioridad para rematar pese a la Velocidad 70, y Terremoto y Puño Hielo cubren Acero, Fuego, Agua, Tierra y a los Dragón/Tierra que entran a por el STAB. Con Ataque 135 y un cuerpo de PS 80 / Defensa 130, Metagross ataca varias veces por partida en lugar de en un solo golpe. Vidasfera y Firme maximizan la presión.',
      alternatives: [
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Con Cuerpo Puro, cambia a Metagross por un colocador de trampas ofensivo que ignora Intimidación.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'move',
          value: 'AGILITY',
          note: 'Agilidad transforma a Metagross en sweeper tras un turno de preparación.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'item',
          value: 'EXPERTBELT',
          note: 'Cinta Experto castiga los cambios a resistencias equivocadas sin el retroceso de la Vidasfera.'
        }
      ]
    },
    {
      role: 'hazard-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'CLEARBODY',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 4, 252, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'METEORMASH', 'BULLETPUNCH', 'EARTHQUAKE'],
      justification:
        'Cuerpo Puro ignora Intimidación y las bajadas de características, ideal para un colocador de trampas que debe entrar muchas veces. Con PS 80 / Defensa 130 / Defensa Especial 90 y el tipo Acero/Psíquico, que reúne nueve resistencias, Metagross pone Trampa Rocas con comodidad y devuelve daño con Puño Meteoro y Terremoto. Puño Bala remata a los debilitados pese a la Velocidad baja. Restos y naturaleza Agitada priorizan repetir entradas sobre la potencia inmediata.',
      alternatives: [
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga el contacto físico que la Defensa alta de Metagross invita.'
        },
        {
          slot: 'move',
          value: 'ICEPUNCH',
          note: 'Puño Hielo pega a los Dragón/Tierra que ignoran el STAB Acero, a cambio de la prioridad de Puño Bala.',
          replaces: 'BULLETPUNCH'
        }
      ]
    }
  ]
}

export default metagross
