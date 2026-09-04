import type { PokemonTemplateSet } from '../../lib/types'

const grimmsnarl: PokemonTemplateSet = {
  internalName: 'GRIMMSNARL',
  templates: [
    {
      role: 'screens-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRANKSTER',
      item: 'LIGHTCLAY',
      nature: 'CAREFUL',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['REFLECT', 'LIGHTSCREEN', 'PARTINGSHOT', 'TAUNT'],
      justification:
        'Grimmsnarl se apoya en Bromista para dar prioridad a todos los ataques de estado, lo que convierte sus dos pantallas en instalaciones +1: Reflejo y Pantalla de Luz se montan antes de que el rival ataque, y con Refleluz duran más turnos para proteger al equipo. Última Palabra, también con prioridad por Bromista, baja el Ataque y At. Esp. del rival y saca a Grimmsnarl para ceder el turno a un compañero ya protegido por las pantallas. Mofa con prioridad frena movimientos de estado del rival al abrir la partida, evitando que monte sus propias pantallas o trampas. Naturaleza Cauta con 252 PS / 252 Def. Esp. y PS 95 para que el colocador de pantallas aguante el intercambio y logre montar ambas; el Ataque 120 queda de lado porque el rol es puramente de apoyo de campo.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno con prioridad paraliza a un atacante más rápido o a un setup rival, a cambio de la presión de Mofa sobre los leads.',
          replaces: 'TAUNT'
        },
        {
          slot: 'move',
          value: 'SPIRITBREAK',
          note: 'Choque Anímico aprovecha el Ataque 120 para pegar duro y bajar el At. Esp. del rival, cediendo la utilidad de apoyo de Mofa.',
          replaces: 'TAUNT'
        }
      ]
    }
  ]
}

export default grimmsnarl
