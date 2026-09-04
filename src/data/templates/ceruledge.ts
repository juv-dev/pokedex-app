import type { PokemonTemplateSet } from '../../lib/types'

const ceruledge: PokemonTemplateSet = {
  internalName: 'CERULEDGE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FLASHFIRE',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'BITTERBLADE', 'SHADOWCLAW', 'CLOSECOMBAT'],
      justification:
        'Ceruledge es en Añil V4.13 un barredor físico Fuego/Fantasma con Ataque 125 y la firma de su especie, Espada Lamento, un STAB Fuego de 90 de potencia que recupera la mitad del daño infligido: la combinación con Danza Espada (+2 Ataque) hace que cada golpe sane el desgaste y lo vuelva muy difícil de desgastar durante el barrido. Absorbe Fuego ("no le afecta y potencia en un 50% sus ataques de fuego") le permite entrar ante un movimiento de Fuego y salir con el STAB potenciado, aumentando la recuperación y el daño de Espada Lamento. Garra Umbría es el STAB Fantasma de uso fiable (a diferencia de Poltergeist, no falla por falta de objeto), y A Bocajarro da la cobertura Lucha necesaria contra Acero, Roca y Siniestro, los tipos que resisten Fuego/Fantasma. Vidasfera maximiza el pico de daño del setter. Naturaleza Alegre y reparto en Ataque y Velocidad, apoyados por una Defensa Especial 100 que permite montar el turno.',
      alternatives: [
        {
          slot: 'ability',
          value: 'WEAKARMOR',
          note: 'Armadura Frágil convierte el set en uno de Velocidad: al recibir un golpe físico sube dos niveles y barre, a cambio de bajar su Defensa.',
          replaces: 'FLASHFIRE'
        },
        {
          slot: 'move',
          value: 'POLTERGEIST',
          note: 'Poltergeist es un STAB Fantasma de 110 de potencia, pero falla si el rival no lleva objeto, a cambio del uso fiable de Garra Umbría.',
          replaces: 'SHADOWCLAW'
        },
        {
          slot: 'move',
          value: 'PHANTOMFORCE',
          note: 'Golpe Fantasma es STAB Fantasma de dos turnos que evade y puede romper Protección, a cambio de dejar un turno libre al rival.',
          replaces: 'SHADOWCLAW'
        }
      ]
    }
  ]
}

export default ceruledge
