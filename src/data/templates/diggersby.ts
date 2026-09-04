import type { PokemonTemplateSet } from '../../lib/types'

const diggersby: PokemonTemplateSet = {
  internalName: 'DIGGERSBY',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'HUGEPOWER',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'RETURN', 'QUICKATTACK', 'KNOCKOFF'],
      justification:
        'El Ataque base es solo 56, pero Potencia (habilidad oculta) lo duplica en Añil, dejándolo en un equivalente de ~112, y la Cinta Elección lo multiplica otra vez. Con PS 85 / Def 77 / Def.Esp 77 aguanta lo suficiente para entrar varias veces y romper. Normal/Tierra: Terremoto es el STAB de 100, Retorno es un STAB Normal casi sin resistencias con felicidad máxima, Ataque Rápido (prioridad +1) remata a los frágiles más rápidos pese a la Velocidad 78, y Desarme quita el objeto rival y castiga a Fantasma y Psíquico. Firme porque la Velocidad es causa perdida y todo el valor está en el pico de daño.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEPUNCH',
          note: 'Cobertura de hielo para Volador, Dragón y Tierra como Gliscor o Landorus, a cambio de la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'FACADE',
          note: 'STAB Normal que no depende de la felicidad y dobla su potencia si Diggersby acaba quemado o envenenado.',
          replaces: 'RETURN'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Con Danza Espada en lugar de Ataque Rápido o Desarme para picos de daño sin quedar bloqueado en un movimiento.'
        }
      ]
    }
  ]
}

export default diggersby
