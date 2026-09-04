import type { PokemonTemplateSet } from '../../lib/types'

const charjabug: PokemonTemplateSet = {
  internalName: 'CHARJABUG',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BATTERY',
      item: 'EVIOLITE',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STICKYWEB', 'VOLTSWITCH', 'DISCHARGE', 'LIGHTSCREEN'],
      justification:
        'Charjabug, sin evolucionar, lleva Mineral Evolutivo y sube su Defensa y Def.Esp. un 50%: con Def 95 de base y PS 57, ese bono lo vuelve una pieza sorprendentemente densa para su etapa y justifica el nicho de NFE curado. Su función real es colocar Red Viscosa en el campo rival, penalizando la Velocidad de lo que entre y preparando el barrido del equipo, y rotar con Voltiocambio sin ceder el turno. Batería potencia un 30% los ataques especiales de los aliados cada vez que entra, un refuerzo de apoyo que hace que el equipo de barredores especiales gane daño con cada pivot. Chispazo daña con 30% de parálisis para no quedarse pasivo, y Pantalla de Luz protege al flanco especial del equipo al salir. Reparto íntegro en PS, Defensa y el resto en Def.Esp. con Osada para maximizar la densidad que da Mineral Evolutivo.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno paraliza a un objetivo específico con precisión segura, más control puntual que el efecto de área de Chispazo pero sin daño.',
          replaces: 'DISCHARGE'
        },
        {
          slot: 'move',
          value: 'IRONDEFENSE',
          note: 'Defensa Férrea sube la ya reforzada Defensa dos niveles y convierte a Charjabug en una pared dura, renunciando al apoyo de Pantalla de Luz.',
          replaces: 'LIGHTSCREEN'
        }
      ]
    }
  ]
}

export default charjabug
