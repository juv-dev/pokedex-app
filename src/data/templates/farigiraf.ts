import type { PokemonTemplateSet } from '../../lib/types'

const farigiraf: PokemonTemplateSet = {
  internalName: 'FARIGIRAF',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PSYCHICSURGE',
      item: 'TERRAINEXTENDER',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 0, 4],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'EXPANDINGFORCE', 'PSYSHOCK', 'SHADOWBALL'],
      justification:
        'Farigiraf activa su propio campo con Psicogénesis al entrar, potenciando Vasta Fuerza y haciendo que golpee a todos los rivales a la vez, mientras impide los movimientos con prioridad del enemigo, una ventaja enorme para un barrendero de Velocidad 60. Maquinación sube el Ataque Especial 110 dos niveles, y el Cubresuelos alarga el campo psíquico para sostener el sweep. Psicocarga golpea contra la Defensa en lugar de la Defensa Especial, clave contra muros especiales, y Bola Sombra cubre a Fantasma y Psíquico rivales. Cola Armadura queda como alternativa útil en dobles o contra prioridad no absorbida, pero Psicogénesis es la elección óptima por el control de campo y la pasividad que otorga al resto del equipo.',
      alternatives: [
        {
          slot: 'ability',
          value: 'ARMORTAIL',
          note: 'Cola Armadura bloquea la prioridad rival sin consumir el turno del campo, útil si otro miembro ya mantiene el terreno psíquico.'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Más daño inmediato que el Amplificador, a costa de no renovar el campo psíquico durante el sweep.'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante garantiza el turno de Maquinación frente a rivales más rápidos, cediendo la duración del campo.'
        }
      ]
    }
  ]
}

export default farigiraf