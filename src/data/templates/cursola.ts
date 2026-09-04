import type { PokemonTemplateSet } from '../../lib/types'

const cursola: PokemonTemplateSet = {
  internalName: 'CURSOLA',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'viable',
      ability: 'PERISHBODY',
      item: 'LEFTOVERS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHADOWBALL', 'EARTHPOWER', 'SCALD', 'STRENGTHSAP'],
      justification:
        'Cursola en Añil V4.13 tiene At. Esp. 145 y Def. Esp. 130, pero PS 60 / Def 50 y Velocidad 30, por lo que su rol es un rompemuros especial lento y frágil que entra a devolver daño duro antes de caer. Bola Sombra (STAB Fantasma) y Tierra Viva cubren a Fantasma, Veneno y Acero; Escaldar quema a los rompemuros físicos que amenazan su Def 50; y Absorbefuerza sostiene los 60 PS y además baja el Ataque rival, su única recuperación real. Ni Espacio Raro ni movimientos de prioridad figuran en su repertorio legal, así que depende de aliados para la velocidad o de golpear al rival que entra. Cuerpo Mortal castiga el contacto: si un atacante físico la toca, el atacante y Cursola caen a la vez al tercer turno, un seguro que disuade de convertirla en cambio gratis y lleva a un compañero. Naturaleza Modesta con reparto en PS y At. Esp. Es viable, no óptimo, porque su Def 50 y PS 60 no toleran más de un intercambio y compite con muros especiales que sí tienen Espacio Raro o recuperación fiable.',
      alternatives: [
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante garantiza un golpe o una utilidad antes de caer frente a un rival más rápido y fuerte, a cambio de la cura pasiva.'
        },
        {
          slot: 'move',
          value: 'WILLOWISP',
          note: 'Fuego Fatuo quema sin depender de la precisión de Escaldar frente a rivales que la persiguen, cediendo la cura de Absorbefuerza.',
          replaces: 'SCALD'
        },
        {
          slot: 'move',
          value: 'GIGADRAIN',
          note: 'Gigadrenado cura la mitad del daño hecho y golpea a Agua/Tierra, como alternativa de recuperación a Absorbefuerza.',
          replaces: 'STRENGTHSAP'
        },
        {
          slot: 'ability',
          value: 'WEAKARMOR',
          note: 'Armadura Frágil convierte cada golpe físico en +2 Velocidad, intentando compensar la Velocidad 30 a costa de perder la Defensa.'
        }
      ]
    }
  ]
}

export default cursola