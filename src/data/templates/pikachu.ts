import type { PokemonTemplateSet } from '../../lib/types'

const pikachu: PokemonTemplateSet = {
  internalName: 'PIKACHU',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STATIC',
      item: 'LIGHTBALL',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'THUNDERBOLT', 'SURF', 'GRASSKNOT'],
      justification:
        'Pikachu no evoluciona a Raichu en este set por un único motivo mecánico: Bolaluminosa es exclusiva de Pikachu y "aumenta el Ataque y el Ataque Especial", duplicando efectivamente su At.Esp 50 hasta un rango de rompemuros pese a que la base sea baja. Sobre esa duplicación, Golpe Bajo suma dos niveles de At.Esp. en un turno y deja a Pikachu golpeando como una amenaza especial de primer orden, con Velocidad 90 para actuar antes que buena parte del metajuego. Rayo (90, STAB) es el golpe principal; Surf y Hierba Nudo son la cobertura clásica anti-Eléctrico: Surf castiga a Tierra y Roca, Hierba Nudo pega a los Agua y Tierra pesados que serían inmunes o resistentes al STAB. El objeto está fijado —es toda la razón de usar Pikachu—, así que no cabe Orbe Vida ni Vidasfera. Estática ("30% de paralizar al contacto") es la habilidad por defecto porque Pararrayos solo sube At.Esp. al recibir un movimiento eléctrico que rara vez llega. Miedosa y máxima Velocidad porque con PS 35 / Def 30 Pikachu no sobrevive a la respuesta: tiene que pegar primero.',
      alternatives: [
        {
          slot: 'move',
          value: 'VOLTSWITCH',
          note: 'Voltiocambio conserva el momentum y trae al compañero con seguridad, renunciando al pico de barrido de Golpe Bajo.',
          replaces: 'NASTYPLOT'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme quita el objeto rival y aprovecha que la duplicación de Bolaluminosa también afecta al Ataque físico.',
          replaces: 'GRASSKNOT'
        },
        {
          slot: 'ability',
          value: 'LIGHTNINGROD',
          note: 'Pararrayos ("neutraliza los movimientos de tipo Eléctrico y sube un nivel el At.Esp.") gana el duelo directo contra otros Eléctricos que intenten pegar con su STAB.'
        }
      ]
    }
  ]
}

export default pikachu
