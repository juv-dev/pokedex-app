import type { PokemonTemplateSet } from '../../lib/types'

const shiinotic: PokemonTemplateSet = {
  internalName: 'SHIINOTIC',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'EFFECTSPORE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['SPORE', 'STRENGTHSAP', 'LEECHSEED', 'MOONBLAST'],
      justification:
        'Shiinotic en Añil V4.13 recibe un buff de PS (60 a 75) que la acerca al muro viable: con PS 75 / Def 80 / Def. Esp. 100 y Velocidad 30, su rol es dormir y desgastar. Espora (100 de precisión, la mejor dormidera del juego) neutraliza un rival por partida y es la razón de existir del set; Absorbefuerza reduce el Ataque del rival un nivel y recupera tantos PS como el Ataque de ese rival, así que contra físicos cura y degrada en un solo turno; Drenadoras drena 1/8 por turno y da la curación que cubre la entrada de especiales, que no se castigan con Absorbefuerza; Fuerza Lunar (95, STAB Hada) castiga a los Pokémon Siniestro y Dragón que entran a cambiar. La inversión 252 PS / 252 Def con Osada maximiza el lado físico que Absorbefuerza roba; los 30 de Velocidad con IV 0 aseguran el orden bajo Espacio Raro. La cruz competitiva es la debilidad 4x a Veneno: cualquier atacante de ese tipo la expulsa del campo, y Fuego, Volador, Acero y Hielo la presionan. Es "viable" y no "óptimo": la multiplicidad de debilidades y la falta de un ataque de golpe fuerte la dejan como muro de rol, no como pared de equipo.',
      alternatives: [
        {
          slot: 'move',
          value: 'GIGADRAIN',
          note: 'Gigadrenado (75, STAB Planta) da STAB de daño y curación directa, a cambio de la cobertura Hada.',
          replaces: 'MOONBLAST'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno paraliza a los que resisten dormir o ya despiertan, cediendo la buena dosis de daño de Fuerza Lunar.',
          replaces: 'MOONBLAST'
        },
        {
          slot: 'ability',
          value: 'RAINDISH',
          note: 'Cura 1/16 por turno bajo lluvia y hace a Shiinotic parte de equipos de clima, renunciando a la lotería de Efecto Espora.'
        }
      ]
    }
  ]
}

export default shiinotic