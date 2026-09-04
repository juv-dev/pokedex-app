import type { PokemonTemplateSet } from '../../lib/types'

const armarouge: PokemonTemplateSet = {
  internalName: 'ARMAROUGE',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FLASHFIRE',
      item: 'LEFTOVERS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'AURASPHERE', 'PSYSHOCK', 'FLAMETHROWER'],
      justification:
        'Armarouge en Añil V4.13 combina Ataque Especial 125 con una Defensa 100 y un PS 85 que le permiten montar el turno de mejora: es un setup especial lento, no un sweeper de velocidad. Absorbe Fuego ("si le alcanza un movimiento de tipo Fuego, no le afecta y potencia en un 50% sus ataques de fuego") le da inmunidad de hecho al tipo Fuego y encima potencia su STAB de fuego. Paz Mental sube Ataque Especial y Defensa Especial, apuntalando contra los atacantes especiales que los tipos Fuego/Psíquico temen. Esfera Aural es cobertura que nunca falla contra Acero y Siniestro; Psicocarga es el STAB Psíquico que pega contra la Defensa física y rompe muros especiales; y Lanzallamas es el STAB Fuego potenciado por Absorbe Fuego. Restos sostienen al setter. Naturaleza Modesta y reparto en PS y Ataque Especial, aprovechando que la Velocidad 75 y el planteamiento de setup hacen que la inversión en Velocidad aporte menos.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera sube el pico de daño de los tres ataques a cambio de perder la curación pasiva que el setter necesita para montar.',
          replaces: 'LEFTOVERS'
        },
        {
          slot: 'ability',
          value: 'WEAKARMOR',
          note: 'Armadura Frágil convierte el set en uno de Velocidad: al recibir un golpe físico sube dos niveles y barre, a cambio de bajar su Defensa.',
          replaces: 'FLASHFIRE'
        },
        {
          slot: 'move',
          value: 'MYSTICALFIRE',
          note: 'Llama Embrujada debilita el Ataque Especial del rival a la vez que golpea, a cambio de algo de potencia frente a Lanzallamas.',
          replaces: 'FLAMETHROWER'
        }
      ]
    }
  ]
}

export default armarouge
