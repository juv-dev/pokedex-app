import type { PokemonTemplateSet } from '../../lib/types'

const duraludon: PokemonTemplateSet = {
  internalName: 'DURALUDON',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STALWART',
      item: 'EVIOLITE',
      nature: 'MODEST',
      evs: [252, 0, 4, 252, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRACOMETEOR', 'FLASHCANNON', 'THUNDERBOLT', 'THUNDERWAVE'],
      justification:
        'Duraludon en Añil V4.13 es Acero/Dragón con Ataque Especial 120 y Velocidad 85, y como aún puede evolucionar a Archaludon puede llevar Mineral Evolutivo, que sube su Defensa y Defensa Especial un 50%: con Defensa 115 de base ese bono lo vuelve sorprendentemente voluminoso por el lado físico mientras conserva su rol de atacante especial. Cometa Draco (130, STAB Dragón) es su golpe de mayor potencia aunque baje dos niveles su At. Esp.; Cañón Resplandor (80, STAB Acero) cubre a Hada que frena al Dragón; Rayo castiga a Agua y Volador que resisten ambas STAB; y Onda Trueno mengua a barredores rápidos, útil porque Velocidad 85 no garantiza superarlos. La habilidad Acérrimo (Stalwart) evita que Red Viscosa u otras trampas lo obliguen a golpear a otro rival, una ventaja real frente a equipos con regazo. El reparto 252 PS / 252 At. Esp. con Modesta maximiza potencia y volumen, dejando la Velocidad sin invertir porque el rol no depende de ganar el primer turno.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección eleva el pico de Cometa Draco y Cañón Resplandor a costa de quedarse en un solo tipo de movimiento por turno y perder el Mineral Evolutivo.'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Plancha Corporal convierte la alta Defensa en daño físico y aleja el temor a quedar bloqueado solo en especial, cediendo la mengua de Onda Trueno.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas aprovecha su volumen para colocar la trampa de entrada, cediendo la cobertura de Rayo.',
          replaces: 'THUNDERBOLT'
        }
      ]
    }
  ]
}

export default duraludon
