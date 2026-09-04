import type { PokemonTemplateSet } from '../../lib/types'

const crabominable: PokemonTemplateSet = {
  internalName: 'CRABOMINABLE',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'IRONFIST',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAINPUNCH', 'ICEHAMMER', 'THUNDERPUNCH', 'FIREPUNCH'],
      justification:
        'Crabominable tiene Ataque 132 y Puño Férreo, que potencia en un 20% los movimientos de puño: Puño Drenaje (75 Lucha) pasa a 90 efectivo además de recuperar la mitad del daño, Puño Trueno y Puño Fuego quedan en 90 de cobertura, una triple cobertura de puños que apenas deja muros sin castigar. Martillo Hielo (100, STAB Hielo) es el golpe más duro del set y su tipo Lucha/Hielo da dos STAB que se cubren bien. El set es íntegramente ofensivo, así que el Chaleco Asalto refuerza el flanco especial (Def.Esp 67, la debilidad real) y lo convierte en un atacante que entra, aguanta y golpea varias veces pese a la Velocidad 43. Puño Drenaje sostiene los PS que el Chaleco no da, y PS 97 de base da el volumen. Reparto 252 Ataque / 252 PS con Firme para maximizar daño y capacidad de entrada; la falta de velocidad se asume porque el rol es romper muros y tanquear, no correr.',
      alternatives: [
        {
          slot: 'move',
          value: 'JETPUNCH',
          note: 'Puño Jet (Agua, prioridad +1, potencia 60 potenciada por Puño Férreo) da la muy necesaria prioridad con Velocidad 43, a cambio de la cobertura de Fuego.',
          replaces: 'FIREPUNCH'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección cambia el factor de tanque por un pico de daño enorme en un rompemuros de un solo golpe, a cambio de quedar bloqueado en un movimiento.'
        },
        {
          slot: 'ability',
          value: 'ANGERPOINT',
          note: 'Irascible sube el Ataque al máximo al recibir un crítico, un cambio de habilidad de nicho para equipos que fuerzan críticos.'
        }
      ]
    }
  ]
}

export default crabominable
