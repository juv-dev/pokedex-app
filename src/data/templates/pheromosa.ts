import type { PokemonTemplateSet } from '../../lib/types'

const pheromosa: PokemonTemplateSet = {
  internalName: 'PHEROMOSA',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BEASTBOOST',
      item: 'FOCUSSASH',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HIGHJUMPKICK', 'UTURN', 'TRIPLEAXEL', 'POISONJAB'],
      justification:
        'Velocidad 151 base y 137 de Ataque con Banda Aguante: Pheromosa es el ejemplo perfecto de lo que Ultraimpulso vuelve imparable, porque su estadística más elevada es la Velocidad y cada KO sube la Velocidad un nivel, cerrando el ciclo. Patada Salto Alta (130, STAB Lucha, penaliza si falla con la mitad del PS propio) borra muros y tanques, y justamente el riesgo de la penalización se cubre con la Banda: Pheromosa sobrevive al primer golpe sí o sí y el fallo deja de ser letal. Ida y Vuelta (70, STAB) es el ingreso seguro: entra, pega, sale y no muere. Triple Axel (20 x3, cada acierto duplica el golpe siguiente) cubre Dragón, Tierra y Volador, y Puya Nociva (80) pega 2x a las Hadas que se esconden de la patada. Alegre con EV en Ataque y Velocidad: con la Banda, la prioridad es garantizar KOs, no sobrevivir.',
      alternatives: [
        {
          slot: 'move',
          value: 'QUIVERDANCE',
          note: 'Danza Aleteo (+1 At. Esp., Def. Esp. y Velocidad) convierte a Pheromosa en set-up especial con la misma Banda, cediendo la patada física.',
          replaces: 'TRIPLEAXEL'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo (95) castiga a Dragón y Tierra por el lado especial y no golpeado, cediendo la cobertura de Triple Axel.',
          replaces: 'TRIPLEAXEL'
        },
        {
          slot: 'move',
          value: 'BUGBUZZ',
          note: 'Zumbido (90, STAB, baja la Def. Esp. rival) es el STAB especial del mix, cediendo la cobertura física.',
          replaces: 'TRIPLEAXEL'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BEASTBOOST',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['QUIVERDANCE', 'BUGBUZZ', 'ICEBEAM', 'FOCUSBLAST'],
      justification:
        'Variante especial viable y sorpresiva: Danza Aleteo sube At. Esp., Def. Esp. y Velocidad un nivel, y la sinergia con Ultraimpulso no se pierde —la estadística más elevada sigue siendo la Velocidad, así que los KOs del set-up siguen subiendo Velocidad y Pheromosa se vuelve inalcanzable. Zumbido (90, STAB, baja la Def. Esp. rival) es el golpe de acumulación monstruoso; Rayo Hielo cubre Dragón, Tierra y Volador, y Onda Certera (120, 70% de precisión) castiga los acero y siniestro que cortan la danza. Vidasfera con Alegre: el set-up ya resuelve el poder y la velocidad del segundo turno, así que el EV va a Velocidad máxima con la naturaleza que la maximiza. Viable y no óptima: la patada física con Banda Aguante entra y mata desde el primer turno, mientras el set-up quema un turno que el perfil frágil de Pheromosa no siempre concede, y Vidasfera le quita esa garantía de subsistir al primer golpe.',
      alternatives: [
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante protege la Danza Aleteo del primer golpe, cediendo el pico de daño de Vidasfera.',
          replaces: 'LIFEORB'
        },
        {
          slot: 'move',
          value: 'POISONJAB',
          note: 'Puya Nociva se queda en el cajón si el equipo ya limpia los acero: Onda Certera cubre el mismo terreno con el riesgo del 30%.',
          replaces: 'FOCUSBLAST'
        }
      ]
    }
  ]
}

export default pheromosa