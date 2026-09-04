import type { PokemonTemplateSet } from '../../lib/types'

const decidueye: PokemonTemplateSet = {
  internalName: 'DECIDUEYE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ACOMETIDA',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'POLTERGEIST', 'LEAFBLADE', 'SHADOWSNEAK'],
      justification:
        'Decidueye combina Ataque 117 con Velocidad 105 y su habilidad oculta Acometida, que al primer turno en combate suma un 50% de Velocidad y un 20% de Ataque: un perfil físico veloz con pico de aparición. Danza Espada eleva el Ataque dos niveles para barrer, y el 50% extra de Velocidad de Acometida en ese primer turno hace más seguro montar la Danza antes de rivales de base 105 o menos. Poltergeist (110, STAB Fantasma) es el golpe de cierre, Hoja Aguda (90, STAB Planta) la cobertura limpia sin bajar stats, y Sombra Vil (40, prioridad +1) remata rivales más rápidos o debilitados sin depender del orden de turnos. Vidasfera potencia cada golpe, y el tipo Planta/Fantasma da inmunidades a Normal y Lucha que facilitan los turnos de entrada. Alegre maximiza la velocidad para superar a la base 105 rival tras el set-up; el Ataque Especial queda sin invertir porque el set es íntegramente físico.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Cambia el pico de daño por longevidad para un planteamiento de bola de nieve que aguanta más turnos en campo.'
        },
        {
          slot: 'move',
          value: 'TRAILBLAZE',
          note: 'Pisa con fuerza: sube Velocidad un nivel al golpear y permite superar a rivales más rápidos sin depender de Acometida, renunciando a la prioridad de Sombra Vil.',
          replaces: 'SHADOWSNEAK'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Set de rompedor fulminante con Cinta Elección que aprovecha el boost de ataque de Acometida en el turno de entrada, a cambio de quedar bloqueado en un movimiento.'
        }
      ]
    }
  ]
}

export default decidueye
