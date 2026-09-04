import type { PokemonTemplateSet } from '../../lib/types'

const eldegoss: PokemonTemplateSet = {
  internalName: 'ELDEGOSS',
  templates: [
    {
      role: 'hazard-removal',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'REGENERATOR',
      item: 'HEAVYDUTYBOOTS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RAPIDSPIN', 'GIGADRAIN', 'SLEEPPOWDER', 'LEECHSEED'],
      justification:
        'Eldegoss es el spinner de apoyo de su rango en Añil V4.13: Regeneración recupera un tercio de sus PS al salir, y combinada con Giro Rápido (que retira Trampa Rocas, Púas y Red Viscosa propias) le permite entrar, limpiar el campo y salir sin coste real. La Defensa Especial base 120 es su mejor estadística, así que la inversión va al lado físico: Osada con 252 PS / 252 Defensa parchea la Defensa 90 mientras la defensa especial ya es elite sin ayuda. Somnífero neutraliza al muro o al usuario de setup que intente quedarse delante; Drenadoras drena PS turno a turno y Gigadrenado pega con STAB recuperando la mitad del daño, así el ciclo de limpieza se sostiene sin movimientos de curación dedicados. Botas Gruesas garantizan que entre a girar sin recibir chip de Púas ni el freno de velocidad de la Red Viscosa enemiga.',
      alternatives: [
        {
          slot: 'move',
          value: 'SYNTHESIS',
          note: 'Fotosíntesis añade recuperación inmediata para equipos sin turnos de cambio libres, a cambio de las Drenadoras.',
          replaces: 'LEECHSEED'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos dan cura pasiva constante si el equipo ya tiene controlado el campo de trampas rival.'
        },
        {
          slot: 'ability',
          value: 'EFFECTSPORE',
          note: 'Efecto Espora castiga con un estado al 30% a los atacantes de contacto, cediendo la recuperación de Regeneración al cambiar.'
        }
      ]
    }
  ]
}

export default eldegoss