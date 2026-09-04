import type { PokemonTemplateSet } from '../../lib/types'

const cobalion: PokemonTemplateSet = {
  internalName: 'COBALION',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'JUSTIFIED',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 0, 4],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'VOLTSWITCH', 'BODYPRESS', 'IRONHEAD'],
      justification:
        'Defensa 129, Velocidad 108 y un tipo Acero/Lucha con muchas resistencias definen a un pivote defensivo que además coloca trampas. Trampa Rocas monta el peligro de entrada aprovechando sus cambios seguros; Voltiocambio conserva el momentum y mantiene el ritmo del equipo. Plancha Corporal usa la Defensa en lugar del Ataque, así que la inversión en Osada sube a la vez su físico y su daño ofensivo, y Cabeza de Hierro es la STAB secundaria contra Hadas. Justiciero le da un nivel de Ataque si le alcanza un movimiento de tipo Siniestro, un extra ocasional que premia sus cambios. Restos sostiene el ciclo de pivoteo. Osada con máximos en PS y Defensa para maximizar tanto el muro como Plancha Corporal.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Sustituto para bloquear estados y ganar lecturas si el equipo no depende de Voltiocambio para el momentum.',
          replaces: 'VOLTSWITCH'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno para frenar barredores rápidos y compensar la falta de control de velocidad del equipo.',
          replaces: 'IRONHEAD'
        },
        {
          slot: 'nature',
          value: 'CAREFUL',
          note: 'Cauta si la presión principal llega por el lado especial y Plancha Corporal no es prioridad.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'JUSTIFIED',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'CLOSECOMBAT', 'IRONHEAD', 'STONEEDGE'],
      justification:
        'Lectura ofensiva: Danza Espada sobre Ataque 90 y Velocidad 108 arma un barredor que aprovecha las muchas resistencias del tipo Acero/Lucha para encontrar el turno de mejora. A Bocajarro es la STAB fuerte, Cabeza de Hierro pega a las Hadas y Roca Afilada cubre a Fuego y Volador. Justiciero puede dar un impulso extra si entra frente a un ataque de tipo Siniestro. Es viable y no óptima porque su Ataque base 90 sin bonificación permanente deja el set algo corto contra los muros más firmes.',
      alternatives: [
        {
          slot: 'move',
          value: 'SACREDSWORD',
          note: 'Espada Santa ignora las mejoras defensivas del rival, útil contra Pokémon que abusan de subir la Defensa.',
          replaces: 'CLOSECOMBAT'
        },
        {
          slot: 'item',
          value: 'WEAKNESSPOLICY',
          note: 'Seguro Debilidad se combina con Justiciero y con su volumen para montar un pico ofensivo tras encajar un golpe.'
        }
      ]
    }
  ]
}

export default cobalion
