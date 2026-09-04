import type { PokemonTemplateSet } from '../../lib/types'

const perrserker: PokemonTemplateSet = {
  internalName: 'PERRSERKER',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TOUGHCLAWS',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'IRONHEAD', 'KNOCKOFF', 'UTURN'],
      justification:
        'Perrserker en Añil V4.13 tiene Ataque 110 y Velocidad 50, demasiado lento para barrer puro pero con PS 70 / Def 100 sólidos. Garra Dura sube 1/3 el daño de todo movimiento de contacto, así que Cabeza de Hierro (STAB Acero) y Desarme rotan con un pico brutal. Danza Espada es el setup para cobrar cambios y convertir la Def 100 en un amortiguador mientras monta; Ida y Vuelta mantiene el momentum cuando no conviene quedarse. La Vidasfera y Garra Dura se apilan, y la Velocidad 50 con naturaleza Alegre asegura ganar la liga de lento-medios tras una Danza Espada. Reparto 252 PS / 252 At. porque la velocidad es la causa perdida frente a la barrera media y el poder es lo que cierra.',
      alternatives: [
        {
          slot: 'ability',
          value: 'STEELYSPIRIT',
          note: 'Alma Acerada potencia un 50% los movimientos Acero propios y del equipo, ideal de apoyo si el set prioriza el STAB Acero sobre la cobertura de contacto.'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado paga a los atacantes de contacto que entren a frenar el setup, cambiando poder por presión defensiva.'
        },
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas reemplaza a Ida y Vuelta cuando el equipo necesita la trampa y Perrserker abre la partida.',
          replaces: 'UTURN'
        }
      ]
    }
  ]
}

export default perrserker