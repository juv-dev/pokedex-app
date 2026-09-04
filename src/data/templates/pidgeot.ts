import type { PokemonTemplateSet } from '../../lib/types'

const pidgeot: PokemonTemplateSet = {
  internalName: 'PIDGEOT',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'NOGUARD',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HURRICANE', 'HEATWAVE', 'UTURN', 'ROOST'],
      justification:
        'En Añil V4.13 Pidgeot base tiene At.Esp 105 y Velocidad 100, una subida notable respecto a la línea original que lo saca del terreno testimonial. Su habilidad oculta Aguante ("todos los movimientos acertarán siempre, tanto del Pokémon como del rival") es lo que define el set: convierte Vendaval (110, STAB, normalmente 70 de precisión) en un cañonazo de precisión perfecta con 30% de confundir, y Onda Ígnea (95) en un golpe fijo del 100%. Esa combinación STAB volador infalible más cobertura de Fuego rompe a Acero, Planta y Bicho de una tacada. Ida y Vuelta mantiene el momentum y aprovecha la Velocidad 100 para pivotar con seguridad; Recuperación compensa el desgaste de Orbe Vida y la debilidad a Trampa Rocas, permitiendo varias entradas. Miedosa y máxima Velocidad para llegar al tramo 100 y golpear antes tras un empate de naturaleza. La contrapartida de Aguante —que el rival también acierta siempre— importa poco en un atacante que quiere forzar cambios, no encajar.',
      alternatives: [
        {
          slot: 'move',
          value: 'WORKUP',
          note: 'Impulso ("aumenta el Ataque y el At.Esp.") transforma el rompemuros en un cierre de partida cuando ya no quedan revisiones, a cambio de la longevidad de Recuperación.',
          replaces: 'ROOST'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección da un pico de rotura inmediato asumiendo el bloqueo de movimiento y sin el desgaste de Orbe Vida.'
        },
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Vaho añade retirada de trampas a un equipo que lo necesite, sacrificando la cobertura de Onda Ígnea contra Acero.',
          replaces: 'HEATWAVE'
        }
      ]
    }
  ]
}

export default pidgeot
