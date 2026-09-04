import type { PokemonTemplateSet } from '../../lib/types'

const conkeldurr: PokemonTemplateSet = {
  internalName: 'CONKELDURR',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'GUTS',
      item: 'FLAMEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FACADE', 'DRAINPUNCH', 'MACHPUNCH', 'KNOCKOFF'],
      justification:
        'Conkeldurr tiene 140 de Ataque y 105 de PS con solo 45 de Velocidad, un perfil de rompemuros resistente y lento. Su habilidad Agallas sube el Ataque un 50 por ciento cuando sufre un estado alterado e ignora la reducción de Ataque por quemadura, así que la Llamasfera es una ventaja neta: se autoinflige la quemadura, activa Agallas y no paga el castigo habitual. Fachada dobla su potencia a 140 cuando el usuario está quemado, y sumado a Agallas y sin STAB se convierte en el golpe neutro más fuerte del set. Puño Drenaje es el STAB de Lucha que además recupera la mitad del daño, clave sin otra forma de curarse; Puño Certero da prioridad para cubrir los 45 de Velocidad; Desarme castiga a Fantasma y Psíquico que frenan a Lucha y les quita el objeto. El reparto a PS y Ataque con naturaleza Firme lo hace pegar fortísimo aguantando varios turnos.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEPUNCH',
          note: 'Cobertura de hielo para Volador, Dragón, Tierra y Planta si el equipo ya resuelve a los Fantasma.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'STAB de Lucha de 120 de potencia para más OHKO, a cambio de bajar las defensas propias y perder la cura de Puño Drenaje.',
          replaces: 'DRAINPUNCH'
        },
        {
          slot: 'ability',
          value: 'SHEERFORCE',
          note: 'Con Vidasfera en lugar de Llamasfera: sube un 30 por ciento los puños con efecto secundario y anula el retroceso del objeto.'
        }
      ]
    }
  ]
}

export default conkeldurr
