import type { PokemonTemplateSet } from '../../lib/types'

const dracozolt: PokemonTemplateSet = {
  internalName: 'DRACOZOLT',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'HUSTLE',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BOLTBEAK', 'OUTRAGE', 'EARTHQUAKE', 'DRAGONCLAW'],
      justification:
        'Dracozolt en Añil V4.13 tiene Ataque 115 y Velocidad 75, y su firma es Electropico: 85 de potencia que se dobla si el rival no actuó ese turno, el golpe más brutal del juego contra cualquier cosa que entre por cambio. Con Entusiasmo (Ataque +50% pero -20% de precisión) y la Cinta Elección, ese Ataque 115 llega a cifras enormes y Electropico castiga a la práctica totalidad del tier (excepto Tierra). Enfado da STAB Dragón de 120 para rematar muros, Terremoto cubre a Tierra/Eléctrico, y Garra Dragón es la opción fiable sin bloqueo cuando la precisión de Entusiasmo y el encierro pesan. Naturaleza Firme con 252 PS / 252 At.: la velocidad 75 media se cubre poniendo a Dracozolt a la defensiva del primer golpe, y PS 90 / Def 90 le permiten sobrevivir a un intercambio. El coste de Entusiasmo es la fiabilidad: por eso Garra Dragón es el cuarto slot y no otro golpe.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAGONTAIL',
          note: 'Cola Dragón (prioridad -6) fuerza el cambio del rival y le aplica el daño físico, útil para desbaratar muros, a cambio de perder STAB Dragón directo.'
        },
        {
          slot: 'ability',
          value: 'VOLTABSORB',
          note: 'Absorbe Elec. convierte el daño Eléctrico en curación, útil como pivote eléctrico, a costa del 50% de daño de Entusiasmo.'
        },
        {
          slot: 'ability',
          value: 'SANDRUSH',
          note: 'Ímpetu Arena dobla la velocidad bajo tormenta de arena, para equipos de clima, renunciando al pico de poder de Entusiasmo.'
        }
      ]
    }
  ]
}

export default dracozolt