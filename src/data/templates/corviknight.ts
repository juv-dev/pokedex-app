import type { PokemonTemplateSet } from '../../lib/types'

const corviknight: PokemonTemplateSet = {
  internalName: 'CORVIKNIGHT',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MIRRORARMOR',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DEFOG', 'ROOST', 'BODYPRESS', 'UTURN'],
      justification:
        'El set óptimo de Corviknight en Añil V4.13 es el de muro físico con retirada de trampas: PS 98 y Defensa 105 con el tipado Volador/Acero (inmune a Tierra y Veneno, diez resistencias y Trampa Rocas neutral en lugar de x2) lo convierten en un switch-in repetible que solo teme a Fuego y Eléctrico. Despejar elimina Trampa Rocas, Púas y Red Viscosa propias; Respiro restaura el 50% de PS sin perder el tipo esa ronda; Plancha Corporal usa la Defensa 105 más la inversión como estadística ofensiva y castiga a Acero, Roca, Normal y Siniestro que intenten frenar al muro; Ida y Vuelta reposiciona al equipo con seguridad tras cumplir. Coraza Reflejo (habilidad oculta) devuelve al rival cualquier reducción de características, lo que castiga a los usuarios de Intimidación y a los desarme de stats que buscan menguarlo al entrar; Presión queda como alternativa para desgastar PP en partidas largas. Agitada con 252 PS / 252 Defensa maximiza la estadística que alimenta a Plancha Corporal, y Restos completan el ciclo entrar, limpiar, respirar y pivotar.',
      alternatives: [
        {
          slot: 'ability',
          value: 'PRESSURE',
          note: 'Presión dobla el consumo de PP rival y gana las guerras de desgaste con Respiro, cediendo la protección frente a reducciones de stats.'
        },
        {
          slot: 'move',
          value: 'BRAVEBIRD',
          note: 'Pájaro Osado (120, STAB Volador) castiga a Lucha, Planta y Bicho que resisten Plancha Corporal, a costa del retroceso.',
          replaces: 'BODYPRESS'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas Gruesas eliminan el chip de Púas y el freno de Red Viscosa enemiga antes de poder limpiarlas con Despejar.'
        }
      ]
    }
  ]
}

export default corviknight