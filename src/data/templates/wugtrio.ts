import type { PokemonTemplateSet } from '../../lib/types'

const wugtrio: PokemonTemplateSet = {
  internalName: 'WUGTRIO',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'GOOEY',
      item: 'FOCUSSASH',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TRIPLEDIVE', 'LIQUIDATION', 'AQUAJET', 'SUCKERPUNCH'],
      justification:
        'Wugtrio es un cristal expansivo: Velocidad 120 y Ataque 100 con solo 35 PS lo hacen puro glass-cannon. Inmersión Triple, su firma, golpea tres veces (30 por golpe, 90 efectivos) y rompe Sustitutos, restos y la Banda Aguante del rival; Placaje aguanta como STAB secundario que baja Defensa, y Chorro de Agua más Golpe Bajo dan las dos prioridades para rematar amenazas frágiles y más rápidas. La Banda Aguante es obligada por los 35 PS para asegurar al menos una acción ofensiva completa. Viscosidad, al bajar la Velocidad de quien le da en contacto, le permite sobrevivir y responder a rivales físicos rápidos. Naturaleza Alegre y reparto en Ataque y Velocidad maximizan el rol. Es viable y no óptimo porque su fracción extrema lo hace fácil de sorprender con un golpe de prioridad o unas trampas de entrada.',
      alternatives: [
        {
          slot: 'ability',
          value: 'SANDVEIL',
          note: 'En equipos de tormenta de arena sube un 20% la Evasión y lo protege del daño de la arena, a costa de perder el efecto de Viscosidad.'
        },
        {
          slot: 'move',
          value: 'DIG',
          note: 'Cava cubre a Eléctrico y da un turno evasivo, reemplazando la utilidad situacional de Placaje.'
        }
      ]
    }
  ]
}

export default wugtrio
