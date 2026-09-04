import type { PokemonTemplateSet } from '../../lib/types'

const abomasnow: PokemonTemplateSet = {
  internalName: 'ABOMASNOW',
  templates: [
    {
      role: 'weather-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SNOWWARNING',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 0, 4],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BLIZZARD', 'GIGADRAIN', 'FOCUSBLAST', 'ICESHARD'],
      justification:
        'Nevada instala la nevada al entrar, lo que da a Ventisca un 100% de precisión y monta un modo climático para el equipo. Ataque Especial 92 con Ventisca (STAB), Gigadrenado (STAB de Planta que recupera PS) y Onda Certera (cobertura contra Acero, Fuego, Roca y Siniestro). Esquirla de Hielo aporta prioridad para rematar pese a la Velocidad 60. Máximo PS y Ataque Especial para durar como invocador y seguir pegando. Modesta porque la Velocidad no es su herramienta.',
      alternatives: [
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Precisión fiable y golpe a Veneno, Acero y Fuego en lugar de la cobertura de Onda Certera.',
          replaces: 'FOCUSBLAST'
        },
        {
          slot: 'item',
          value: 'ICYROCK',
          note: 'Alarga la nevada a ocho turnos si el equipo depende del clima, cediendo la potencia de Vidasfera.'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Longevidad como invocador si se prefiere aguantar más turnos a maximizar el daño.'
        }
      ]
    },
    {
      role: 'screens-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SNOWWARNING',
      item: 'LIGHTCLAY',
      nature: 'MODEST',
      evs: [252, 0, 4, 252, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['AURORAVEIL', 'BLIZZARD', 'GIGADRAIN', 'ICESHARD'],
      justification:
        'Velo Aurora solo puede activarse con nevada en el campo, que la propia Nevada garantiza al entrar; con Refleluz dura ocho turnos y reduce el daño físico y especial de todo el equipo. Ventisca al 100% de precisión y Gigadrenado mantienen la ofensiva mientras el equipo prepara su barrido. Perfil viable de apoyo para estructuras hiperofensivas.',
      alternatives: [
        {
          slot: 'move',
          value: 'LEECHSEED',
          note: 'Desgaste residual y recuperación si el equipo prioriza el juego largo tras las pantallas.',
          replaces: 'ICESHARD'
        }
      ]
    }
  ]
}

export default abomasnow
