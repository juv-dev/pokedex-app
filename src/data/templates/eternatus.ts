import type { PokemonTemplateSet } from '../../lib/types'

const eternatus: PokemonTemplateSet = {
  internalName: 'ETERNATUS',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRESSURE',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRACOMETEOR', 'SLUDGEWAVE', 'FIREBLAST', 'DYNAMAXCANNON'],
      justification:
        'Eternatus es un rompemuros especial puro en Añil V4.13: 145 de Ataque Especial y 130 de Velocidad con un volumen de 140 PS y 95 en ambas defensas que ningún otro wallbreaker del metajuego combina. Con Gafas Elección, Cometa Draco (130) y Onda Tóxica (95, STAB Veneno) multiplican su potencia un 50%; Llamarada cubre a los Acero que resisten Dragón y Veneno; y Cañón Dinamax (100, precisión perfecta) es el golpe Dragón fiable sin la recarga de Rayo Infinito (160, que obliga a saltarse el turno siguiente y es inaceptable en un set bloqueado por objeto). Miedosa maximiza los 130 de Velocidad y supera al grueso del metajuego sin potenciar, y Presión desgasta los PP de los checks especiales que intentan plantársele. El reparto invierte en Ataque Especial y Velocidad con 4 en PS porque su función es romper muros y salir antes de recibir el golpe de vuelta.',
      alternatives: [
        {
          slot: 'move',
          value: 'ETERNABEAM',
          note: 'Rayo Infinito (160) maximiza el impacto de un solo turno a costa de quedar expuesto un turno por la recarga.',
          replaces: 'DYNAMAXCANNON'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera permite alternar de movimiento cada turno sin bloqueo, pagando el 30% de PS por ataque.'
        },
        {
          slot: 'nature',
          value: 'MODEST',
          note: 'Modesta cambia parte de la Velocidad por más pico de daño, para equipos que ya cubren con prioridad los rivales rápidos.'
        }
      ]
    },
    {
      role: 'tank',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PRESSURE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TOXICSPIKES', 'RECOVER', 'SLUDGEWAVE', 'DYNAMAXCANNON'],
      justification:
        'Planteamiento defensivo sobre la base de PS 140 y Recuperación, algo que casi ningún legendario ofensivo posee en Añil V4.13: Púas Tóxicas contamina el campo rival con envenenamiento severo, Recuperación restaura la mitad de los PS, Onda Tóxica es el STAB estable de precisión perfecta y Cañón Dinamax golpea sin castigo. Presión obliga al rival a gastar el doble de PP, lo que castiga a los muros que intentan desgastar a Eternatus turno a turno. Osada refuerza la Defensa 95 y el reparto 252 PS / 252 Defensa maximiza el lado físico; la Defensa Especial queda cubierta por Restos y el descuento natural de Onda Tóxica en los switch-ins. Es viable como segunda plantilla: el rol ofensivo de la especie sigue siendo su uso principal por el Ataque Especial 145.',
      alternatives: [
        {
          slot: 'move',
          value: 'COSMICPOWER',
          note: 'Masa Cósmica sube ambas defensas un nivel por turno y transforma el tanque en un muro de acumulación, cediendo el STAB Veneno.',
          replaces: 'SLUDGEWAVE'
        }
      ]
    }
  ]
}

export default eternatus