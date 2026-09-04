import type { PokemonTemplateSet } from '../../lib/types'

const turtonator: PokemonTemplateSet = {
  internalName: 'TURTONATOR',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHELLARMOR',
      item: 'LEFTOVERS',
      nature: 'RELAXED',
      evs: [252, 4, 252, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BODYPRESS', 'RAPIDSPIN', 'WILLOWISP', 'FLAMETHROWER'],
      justification:
        'Turtonator en Añil V4.13 tiene Defensa 135, la más alta del rango junto a su tipo Fuego/Dragón, y Coraza Batalla ("bloquea los golpes críticos"), un combo que lo hace casi imposible de romper físicamente. Golpe Corporal (80 de potencia que usa la Defensa en vez del Ataque) convierte esa Defensa 135 en daño físico directo, ideal porque Ataque y At. Esp. no llegan a 91. Giro Rápido elimina las trampas del propio campo mientras mantiene presión, Llamarada Falsa quema a los atacantes de contacto y Lanzallamas (90, STAB Fuego) es el golpe especial de respuesta contra aceros y hierbas. Velocidad 36 y naturaleza Plácida (Def +, Vel -) hacen que no pague nada por ser lento. Reparto 252 PS / 252 Def con 4 en Ataque: la Defensa alimenta a Golpe Corporal y la inversión en PS sostiene al tanque que no tiene recuperación fiable más allá de Restos.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRACOMETEOR',
          note: 'Cometa Draco (130, STAB Dragón) le da un pico de daño especial al tanque, a costa de ocupar el hueco de Lanzallamas.'
        },
        {
          slot: 'move',
          value: 'SHELLTRAP',
          note: 'Trampa Caparazón (150, prioridad -3) sorprende castigando si recibe daño físico ese turno, cediendo la utilidad de Giro Rápido.'
        }
      ]
    }
  ]
}

export default turtonator
