import type { PokemonTemplateSet } from '../../lib/types'

const regirock: PokemonTemplateSet = {
  internalName: 'REGIROCK',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CLEARBODY',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'BODYPRESS', 'DRAINPUNCH', 'THUNDERWAVE'],
      justification:
        'Defensa base 200 es el rasgo que lo define: Plancha Corporal, de tipo Lucha, usa esa cifra como Ataque y pega durísimo sin invertir un solo EV ofensivo, además de cubrir Roca, Siniestro, Normal y Acero. Trampa Rocas aprovecha su enorme dureza física para entrar y colocar la trampa clave, Puño Drenaje repone PS porque su única otra cura es Descanso, y Onda Trueno frena a los sweepers. Cuerpo Puro impide que le bajen las características con Intimidación o movimientos. Agitada con inversión total en PS y Defensa; la Defensa Especial 100 base y los PS 80 ya bastan para el flanco especial y Plancha Corporal escala con la Defensa invertida.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHESTOBERRY',
          note: 'Con Descanso en lugar de Onda Trueno, la Baya Atania da cura completa e inmediata a cambio de dos turnos dormido si falla la baya.'
        },
        {
          slot: 'move',
          value: 'CURSE',
          note: 'Maldición sube Ataque y Defensa para un plan lento de barrido con Plancha Corporal.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Roca Afilada da STAB directo si el equipo prefiere daño a la recuperación de Puño Drenaje.',
          replaces: 'DRAINPUNCH'
        }
      ]
    }
  ]
}

export default regirock
