import type { PokemonTemplateSet } from '../../lib/types'

const golisopod: PokemonTemplateSet = {
  internalName: 'GOLISOPOD',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'EMERGENCYEXIT',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FIRSTIMPRESSION', 'LIQUIDATION', 'AQUAJET', 'SUCKERPUNCH'],
      justification:
        'Golisopod en Añil V4.13 tiene la habilidad Retirada reescrita: "abandona el terreno de combate luego de usar un movimiento de tipo Bicho", y eso transforma su rol de pivot de entrada. Escaramuza (90, prioridad +2, tipo Bicho) golpea primero con Ataque 125 y, al ser un movimiento de tipo Bicho, dispara Retirada: Golisopod inflige el golpe y se cambia solo, un pivot gratuito que además revienta a leads de setup o a Pokémon que intentan montar un cambio. Cuando conviene quedarse en el campo, Liquidación (85, STAB Agua) castiga a cambio y no usa tipos Bicho, así que Retirada no se activa; Lengüetazo (40, prioridad +1) y Golpe Bajo (70, prioridad +1) rematan a los frágiles en orden de turno pese a la Velocidad 40. Chaleco Asalto eleva la Def. Esp. 90 de base para que el pivot absorba golpes especiales antes del Escaramuza + cambio. Firme y 252 en Ataque maximizan el daño que paga la salida automática.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Pico de daño en el Escaramuza de entrada, a costa de perder la flexibilidad de alternar golpes frente a rivales que aguanten.'
        },
        {
          slot: 'move',
          value: 'XSCISSOR',
          note: 'Cruzada (80, STAB Bicho) da un golpe Bicho sin turno de entrada que también dispara Retirada, como sustitución cuando Escaramuza no es viable.'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme castiga a los cambios quitando objetos, en lugar de la prioridad de Golpe Bajo.'
        }
      ]
    }
  ]
}

export default golisopod
