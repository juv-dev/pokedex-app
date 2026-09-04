import type { PokemonTemplateSet } from '../../lib/types'

const starmie: PokemonTemplateSet = {
  internalName: 'STARMIE',
  templates: [
    {
      role: 'hazard-removal',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'NATURALCURE',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HYDROPUMP', 'PSYSHOCK', 'RAPIDSPIN', 'RECOVER'],
      justification:
        'Starmie en Añil V4.13 reparte At. Esp. 100 y Velocidad 115 con Def 85 / Def. Esp. 85, el perfil clásico de retirador de trampas ofensivo y rápido. Giro Rápido limpia Trampa Rocas, Púas y demás del propio campo mientras mantiene la presión ofensiva, algo que un retirador puramente defensivo no ofrece. Recuperación más Cura Natural, que elimina los estados alterados al cambiar, lo vuelven muy sostenible: entra, gira, se cura y vuelve a entrar sin acumular desgaste ni veneno. Hidrobomba es el STAB de mayor potencia y Psicocarga golpea por la Defensa física, lo que le permite hacer daño real a muros especiales voluminosos en vez de rebotar contra ellos. Restos apoya el plan de longevidad. Miedosa y máximo reparto en At. Esp. y Velocidad, porque ese 115 es un recurso que no se puede ceder y define su papel de retirador que además amenaza.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Con Orbe Vida y un tercer ataque (Rayo Hielo o Rayo) en el hueco de Recuperación, pasa de retirador sostenible a retirador agresivo con mucha más presión inmediata.'
        },
        {
          slot: 'move',
          value: 'SCALD',
          note: 'Escaldar cambia potencia por precisión perfecta y un 30% de quemar, útil si el equipo prefiere fiabilidad y chip de estado a la rotura de Hidrobomba.',
          replaces: 'HYDROPUMP'
        },
        {
          slot: 'item',
          value: 'STARMINITE',
          note: 'Con Starmita, Mega Starmie gana Potencia (duplica el Ataque) y cambia por completo de plan a barredor físico con Fuerza Líquida, Psicocorte y Acua Jet prioritario; es otra plantilla, no un ajuste del set especial.'
        }
      ]
    }
  ]
}

export default starmie
