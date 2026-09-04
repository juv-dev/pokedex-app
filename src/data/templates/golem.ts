import type { PokemonTemplateSet } from '../../lib/types'

const golem: PokemonTemplateSet = {
  internalName: 'GOLEM',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STURDY',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 4, 252, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'EARTHQUAKE', 'STONEEDGE', 'SUCKERPUNCH'],
      justification:
        'El perfil en Añil V4.13 es el de un muro físico que además pone la trampa: PS 110 y Defensa 130 con Velocidad 45 lo sacan por completo del tramo ofensivo, pero le dan una de las mejores paredes físicas del rango. Robustez, con su texto "evita que el rival pueda debilitarlo de un solo golpe cuando tiene los PS al máximo", garantiza que Golem entre una vez y coloque Trampa Rocas incluso frente a un rival más rápido y más fuerte, y le sirve de seguro de un solo uso más adelante contra un golpe supereficaz. Restos cubre la recuperación porque su repertorio legal no tiene ningún movimiento de curación. Terremoto (100 de potencia, STAB) y Roca Afilada (100, STAB) forman una cobertura que casi nada resiste entre Tierra y Roca. Golpe Bajo (70, prioridad +1) es la respuesta a la Velocidad 45: permite que una pared con Ataque 120 siga castigando a barredores frágiles y rematando objetivos en rango sin depender del orden de turnos. El reparto 252 PS / 252 Def con Agitada maximiza justo la estadística que hace que Robustez y el volumen importen; el Ataque Especial queda sin invertir porque el set es íntegramente físico.',
      alternatives: [
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Aprovecha la Defensa 130 para restar cerca de 1/6 de PS a cada atacante físico de contacto; se cambia longevidad por presión pasiva.'
        },
        {
          slot: 'item',
          value: 'CUSTAPBERRY',
          note: 'Lead más agresivo: tras quedar a 1 PS por Robustez, actúa primero al turno siguiente para una segunda utilidad o un Golpe Bajo.'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Convierte la Defensa 130 en daño y evita depender de la precisión 80 de Roca Afilada, a cambio de perder el golpe limpio a Voladores.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'EXPLOSION',
          note: 'Cierra un turno llevándose un rival cuando el muro ya cumplió: 250 de potencia con Ataque 120.',
          replaces: 'SUCKERPUNCH'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'ROCKHEAD',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'STONEEDGE', 'DOUBLEEDGE', 'EXPLOSION'],
      justification:
        'Uso secundario que explota el Ataque 120 sin pretender barrer: con Velocidad 45 Golem es un rompemuros, no un sweeper, y la inversión 252 PS / 252 At. con Firme y Cinta Elección le da un pico de daño enorme mientras PS 110 y Defensa 130 le permiten entrar varias veces. Cabeza Roca ("impide que el Pokémon se dañe con sus propios movimientos") transforma Doble Filo en un STAB-neutro de 120 de potencia sin retroceso, spameable turno tras turno, que castiga a lo que resiste Tierra y Roca. Terremoto y Roca Afilada son la doble STAB, y Explosión (250) es el remate cuando ya no queda nada que romper. La Cinta bloquea el movimiento, por eso el set no incluye ningún baile de mejora: los cuatro espacios son ataques con objetivo claro.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Renuncia al pico de la Cinta por poder alternar de golpe y aguantar más turnos apoyándose en PS 110 / Def 130.'
        },
        {
          slot: 'move',
          value: 'SUCKERPUNCH',
          note: 'Prioridad para rematar sin depender de la Velocidad 45; Cabeza Roca no aporta nada a este movimiento pero tampoco resta.',
          replaces: 'EXPLOSION'
        },
        {
          slot: 'nature',
          value: 'BRAVE',
          note: 'Para equipos de Espacio Raro: con IV de Velocidad a 0, Golem ataca primero durante los cinco turnos.'
        }
      ]
    }
  ]
}

export default golem
