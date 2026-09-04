import type { PokemonTemplateSet } from '../../lib/types'

const celebi: PokemonTemplateSet = {
  internalName: 'CELEBI',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'NATURALCURE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'GIGADRAIN', 'PSYCHIC', 'EARTHPOWER'],
      justification:
        'Con stats base 100 en todo, Celebi no destaca en ningún eje pero tampoco tiene un flanco malo, y Maquinación resuelve la falta de potencia bruta subiendo dos niveles el At. Esp. de golpe. Tras la subida, Gigadrenado (STAB) recupera PS y compensa el retroceso de Vidasfera, Psíquico es el segundo STAB de cierre y Tierra Viva castiga a los Acero, Fuego y Veneno que frenan a Planta y Psíquico. Miedosa con máxima Velocidad aprovecha la base 100 para adelantar a buena parte del tier ofensivo tras el setup. Cura Natural le permite entrar a un estado alterado, montar Maquinación y limpiarse al cambiar, lo que la hace difícil de neutralizar con Tóxico o quemadura.',
      alternatives: [
        {
          slot: 'move',
          value: 'DAZZLINGGLEAM',
          note: 'Deslumbrante pega a los Siniestro y Dragón que son inmunes o resistentes a los STAB de Celebi, cediendo la cobertura de Acero.',
          replaces: 'EARTHPOWER'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta mantiene el momentum contra los muros que entran a frenar Maquinación, a cambio de cobertura ofensiva.',
          replaces: 'EARTHPOWER'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos cambia el pico de daño de Vidasfera por longevidad, apoyado en el drenado de Gigadrenado.'
        },
        {
          slot: 'nature',
          value: 'MODEST',
          note: 'Modesta si el equipo aporta control de velocidad y Celebi solo necesita romper tras la subida.'
        }
      ]
    },
    {
      role: 'defensive-pivot',
      isPrimary: false,
      confidence: 'viable',
      ability: 'NATURALCURE',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['GIGADRAIN', 'RECOVER', 'UTURN', 'HEALBELL'],
      justification:
        'Variante de utilidad que exprime el perfil equilibrado y Cura Natural. Con reparto en PS y Def. Esp. y Serena, Celebi entra a atacantes especiales, drena PS con Gigadrenado, rota con Ida y Vuelta y limpia estados de todo el equipo con Cascabel Cura, quitándose los suyos al cambiar. Recuperación le da cura fiable para pivotar toda la partida. Es "viable" y no "óptimo" porque sin inversión ofensiva ni Maquinación su daño es testimonial y puede volverse un pasivo del que el rival monta setup encima.',
      alternatives: [
        {
          slot: 'move',
          value: 'LEECHSEED',
          note: 'Drenadoras suma desgaste y recuperación pasiva contra muros, cediendo la función de clérigo de Cascabel Cura.',
          replaces: 'HEALBELL'
        },
        {
          slot: 'move',
          value: 'PSYCHIC',
          note: 'Psíquico da un STAB con el que amenazar de verdad y no depender solo del chip, a cambio del pivoteo de Ida y Vuelta.',
          replaces: 'UTURN'
        }
      ]
    }
  ]
}

export default celebi
