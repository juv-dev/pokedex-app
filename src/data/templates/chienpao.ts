import type { PokemonTemplateSet } from '../../lib/types'

const chienpao: PokemonTemplateSet = {
  internalName: 'CHIENPAO',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SWORDOFRUIN',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'ICICLECRASH', 'SACREDSWORD', 'SUCKERPUNCH'],
      justification:
        'El perfil de Añil lo deja en un extremo ofensivo puro: Ataque 120, Velocidad 135 y PS 80 con Defensas 80/65. Espada Debacle reduce la Defensa de todos los demás Pokémon, así que Chien-Pao golpea contra rivales ya rebajados de Defensa sin coste propio, lo que amplifica el daño físico de cada golpe. Danza Espada lo lleva a +2 Ataque, Chuzos es el STAB de Hielo con 90 de precisión y 30% de retroceso, Espada Santa (90, precisa) golpea ignorando las subidas de Defensa del rival, y Golpe Bajo (prioridad +1) cubre el problema de los rivales todavía más rápidos y remata a los que intentan superarlo. Vidasfera suma un 30% de poder que se multiplica sobre la caída de Defensa de Espada Debacle, a cambio del 10% de PS por ataque; la Velocidad 135 con Alegre supera al grueso del formato. Es un barrefuerte frágil: no aguanta varios golpes, por eso el reparto va íntegro a Ataque y Velocidad.',
      alternatives: [
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante garantiza una Danza Espada completa incluso ante un lead más rápido o un golpe supereficaz, a cambio del pico de poder de Vidasfera.'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección convierte a Chien-Pao en rompemuros puro sin turno de setup, pero pierde Danza Espada y obliga a cambiar con el bloqueo.'
        },
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Firme maximiza el daño bruto asumiendo empate de velocidad con los 135 de la categoría, útil solo si el equipo no necesita ganarlos.'
        }
      ]
    }
  ]
}

export default chienpao
