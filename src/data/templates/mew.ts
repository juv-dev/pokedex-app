import type { PokemonTemplateSet } from '../../lib/types'

const mew: PokemonTemplateSet = {
  internalName: 'MEW',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SYNCHRONIZE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'SOFTBOILED', 'KNOCKOFF', 'WILLOWISP'],
      justification:
        'Con 100 en las seis estadísticas Mew no compite como atacante puro contra especies de 130+ en su nicho, pero ese mismo reparto plano más Ovocuración lo convierten en el mejor colocador de trampas utilitario de Añil V4.13: recuperación fiable del 50% sin depender del clima ni perder tipo, tipo Psíquico con una sola debilidad relevante y volumen 100/100/100 para entrar varias veces. Trampa Rocas fija el daño de entrada, Desarme quita el objeto al que venga a pararlo y castiga a Psíquicos y Fantasmas, y Fuego Fatuo deja tullido a cualquier físico que intente aprovechar la Defensa 100. Sincronía devuelve la quemadura, el envenenamiento o la parálisis a quien se los inflija, así que los rivales de estado se lo piensan. Reparto físico defensivo con naturaleza Osada y Restos para sostener el desgaste turno a turno.',
      alternatives: [
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Gana el duelo de leads frenando trampas, setup y recuperación del rival, a cambio de la quemadura garantizada de Fuego Fatuo.',
          replaces: 'WILLOWISP'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Cede el turno con ventaja para un pivote más agresivo, sacrificando la utilidad de quitar objetos de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Convierte a Mew en control de trampas del equipo en lugar de colocador, útil si otro compañero ya pone Trampa Rocas.',
          replaces: 'STEALTHROCK'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SYNCHRONIZE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'PSYSHOCK', 'AURASPHERE', 'FLAMETHROWER'],
      justification:
        'Uso secundario que explota la amplitud de movimientos: 100 de At. Esp. y 100 de Velocidad no son cifras de barredor de tier alto, pero tras Maquinación (+2) Mew rompe casi cualquier defensa por la cobertura perfecta. Psicocarga pega por el lado físico del rival y castiga a muros especiales como Chansey, Esfera Aural cubre a Siniestros y Acero, y Lanzallamas remata a los Acero que resisten lo demás. Vidasfera da el empujón de potencia que su At. Esp. base no alcanza. Naturaleza Miedosa para conservar el tope de Velocidad y llegar antes que la base 100 rival.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo golpea a Tierra, Dragón y Volador, un perfil distinto al de Lanzallamas si el equipo ya cubre Acero.',
          replaces: 'FLAMETHROWER'
        },
        {
          slot: 'move',
          value: 'PSYCHIC',
          note: 'Psíquico da más daño bruto contra objetivos que no invierten en Defensa física, a cambio de perder el filo contra muros especiales.',
          replaces: 'PSYSHOCK'
        },
        {
          slot: 'move',
          value: 'EARTHPOWER',
          note: 'Tierra Viva castiga a Veneno y Acero y a Fuegos rivales, cobertura alternativa a Esfera Aural con mejor precisión.',
          replaces: 'AURASPHERE'
        }
      ]
    }
  ]
}

export default mew
