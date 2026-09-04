import type { PokemonTemplateSet } from '../../lib/types'

const guzzlord: PokemonTemplateSet = {
  internalName: 'GUZZLORD',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BEASTBOOST',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STOCKPILE', 'SWALLOW', 'KNOCKOFF', 'DRAGONTAIL'],
      justification:
        'Guzzlord es el tanque más gordo del bloque: 223 de PS base, y Ultraimpulso sube su estadística más alta con cada KO —la PS—, así que cada baja que consigue lo hace más gordo todavía. El set planta el bucle de las reservas: Reserva (sube Defensa y Def. Esp. un nivel y acumula) + Tragar (recupera PS según las reservas acumuladas) convierte al muro en un autosaneador con Restos encima que llega a +2 de Defensa y Def. Esp. sin gastar más que un turno. Desarme (65) arranca el objeto del muro rival y Cola Dragón (60, STAB, obliga al rival a cambiar) lo saca del campo cuando el bicho ya no tiene más reservas que quemar. Cauta con EV en PS y Def. Esp.: el 223 de PS base hace la absorción y el EV tapa uno de los dos 53; la Defensa 53 queda como el flanco débil que el set asume con Cola Dragón y el intercambio 4x Hada. Guzzlord es débil 4x a Hada, el precio del género Siniestro/Dragón: la plantilla asume que el rival tendrá que entrar con su carro de Hada para sacarlo, y ese es justo el intercambio que el equipo del muro debe facilitar.',
      alternatives: [
        {
          slot: 'move',
          value: 'CRUNCH',
          note: 'Triturar (80, STAB Siniestro, 20% de bajar la Defensa rival) da el golpe ofensivo directo que el rol de tanque no exige, cediendo la phaze de Cola Dragón.',
          replaces: 'DRAGONTAIL'
        },
        {
          slot: 'move',
          value: 'AMNESIA',
          note: 'Amnesia (+2 Def. Esp.) parchea el lado especial con un solo movimiento de set-up, cediendo el ciclo de autorecuperación de Reserva y Tragar.',
          replaces: 'STOCKPILE'
        },
        {
          slot: 'item',
          value: 'SITRUSBERRY',
          note: 'Baya Zidra cura 1/3 al bajar del umbral y acelera el ciclo de Tragar, cediendo el drenaje pasivo de Restos.',
          replaces: 'LEFTOVERS'
        },
        {
          slot: 'move',
          value: 'DRACOMETEOR',
          note: 'Cometa Draco (130, STAB, -2 At. Esp. a cambio) es la opción de golpe de potencia para el turno final, cediendo la phaze.',
          replaces: 'DRAGONTAIL'
        }
      ]
    }
  ]
}

export default guzzlord