import type { PokemonTemplateSet } from '../../lib/types'

const obstagoon: PokemonTemplateSet = {
  internalName: 'OBSTAGOON',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'GUTS',
      item: 'FLAMEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FACADE', 'KNOCKOFF', 'CLOSECOMBAT', 'OBSTRUCT'],
      justification:
        'El perfil de Obstagoon en Añil V4.13 (PS 93 / Def 101 / Vel 95) permite un rompemuros de Agallas: con la Llamasfera activa, Agallas sube el Ataque un 50% e ignora la reducción por quemadura, y Fachada pasa de 70 a 140 de potencia. Obstrucción (prioridad +4) da el turno gratis para que la esfera queme al final del primer turno sin recibir daño, y después el STAB Doble Oscuro/Normal de Fachada y Desarme castiga cualquier cambio. A Bocajarro (120) cubre a los Acero y Roca que resisten el par Normal/Siniestro. Naturaleza Firme con inversión en PS y Ataque explota el volumen 93/101 para entrar varias veces; la Velocidad 95 queda cubierta por la presión de Fachada a 140. El costo de Agallas es el desgaste de la quemadura turno a turno, que Obstagoon compensa con su Defensa 101 y con Obstrucción para ganar turnos sin recibir golpes.',
      alternatives: [
        {
          slot: 'item',
          value: 'TOXICORB',
          note: 'Mismo activador de Agallas y Fachada con envenenamiento tóxico: chip de estado mayor, pero sin la reducción de Ataque que la quemadura impondría sin Agallas.'
        },
        {
          slot: 'move',
          value: 'PARTINGSHOT',
          note: 'Última Palabra baja Ataque/At. Esp. del rival al cambiar, manteniendo el momentum cuando el par de tipos ya no presiona.',
          replaces: 'OBSTRUCT'
        },
        {
          slot: 'move',
          value: 'LASHOUT',
          note: 'Desahogo duplica su potencia si le bajan características ese turno y pierde el bloqueo de Obstrucción por un golpe Siniestro directo.',
          replaces: 'OBSTRUCT'
        },
        {
          slot: 'ability',
          value: 'DEFIANT',
          note: 'Competitivo sube +2 el Ataque frente a Intimidación o destellos enemigos, a costa de depender del rival y perder el 50% de Agallas.'
        }
      ]
    }
  ]
}

export default obstagoon