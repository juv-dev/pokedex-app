import type { PokemonTemplateSet } from '../../lib/types'

const espathra: PokemonTemplateSet = {
  internalName: 'ESPATHRA',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SPEEDBOOST',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 4, 252, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'STOREDPOWER', 'DAZZLINGGLEAM', 'ROOST'],
      justification:
        'El núcleo es la acumulación: Impulso, al sumar +1 de Velocidad cada turno, resuelve el problema de la Velocidad 105 sin gastar en ella, y permite a Espathra usar su defensa y recuperación mientras sube. Además, cada subida de Velocidad, Ataque Especial y Defensa Especial alimenta Poder Reservado (20 + 20 por cada nivel positivo), que tras unos turnos de Mente Cálida-Descanso se vuelve un STAB Psíquico devastador. Destello Dúo cubre el tipo Siniestro que inmune a Psíquico, y Respiro restaura PS y quita el tipo Volador. Naturaleza Osada (Defensa alta) y reparto en PS y Ataque Especial aprovechan que Impulso ya garantiza la velocidad; PS 95 le da volumen para el setup.',
      alternatives: [
        {
          slot: 'ability',
          value: 'OPPORTUNIST',
          note: 'Copia los aumentos del rival al entrar, útil contra muros con Corpulencia, a cambio de perder la acumulación propia de Velocidad.'
        },
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Sustituto protege el setup y evita estados mientras Impulso acumula, reemplazando la cobertura de Destello Dúo.'
        }
      ]
    }
  ]
}

export default espathra
