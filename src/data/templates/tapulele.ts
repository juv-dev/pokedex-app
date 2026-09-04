import type { PokemonTemplateSet } from '../../lib/types'

const tapulele: PokemonTemplateSet = {
  internalName: 'TAPULELE',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PSYCHICSURGE',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PSYCHIC', 'MOONBLAST', 'FOCUSBLAST', 'SHADOWBALL'],
      justification:
        'En Añil el campo psíquico potencia los movimientos psíquicos y hace fallar los de prioridad contra los Pokémon en el suelo: Tapu Lele lo crea al entrar, así que su Psíquico (90, STAB, duplicado por Gafas Elección y potenciado por su propio campo) ni siquiera teme Bandazo o Puño Certero rivales. Fuerza Lunar (95, STAB Hada) cubre a los Siniestros que inmunizan Psíquico; Onda Certera (120) castiga a Acero y Siniestro a cambio del 30% de errar, y Bola Sombra remata a Fantasma. El reparto 70/75/115/130/95/95 pide Velocidad 317 con Alegre (95 base con EV) más que poder bruto: artillera 130 con gafas no necesita más SpA y sí ganar la carrera contra la mayoría de los no-veloces. Fuerza Lunar es el STAB de switch-in: no falla y golpea el pool defensivo de las Hadas rivales.',
      alternatives: [
        {
          slot: 'nature',
          value: 'MODEST',
          note: 'Modesta gana 10% de daño a cambio de caer de la franja de Velocidad 317: solo para equipos con control de velocidad propio.',
          replaces: 'TIMID'
        },
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Rayo cubre a Celesteela y a los Volador/Psychic espejo, cediendo la cobertura de Onda Certera.',
          replaces: 'FOCUSBLAST'
        },
        {
          slot: 'item',
          value: 'TERRAINEXTENDER',
          note: 'Cubresuelos alarga el campo psíquico de cinco a ocho turnos, apostando a que el golpe de Onda Certera acierte sin Gafas.',
          replaces: 'CHOICESPECS'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PSYCHICSURGE',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'PSYCHIC', 'MOONBLAST', 'FOCUSBLAST'],
      justification:
        'Variante de set-up viable: Restos + el campo que hace fallar los movimientos de prioridad dejan a Tapu Lele en una posición única para acumular, porque ningún ataque de prioridad la corta mientras el campo dure. Una sola Paz Mental (+1 At. Esp. y +1 Def. Esp.) con el campo activo vuelve a multiplicar su ataque con STAB potenciado y saca de la ecuación al 30% de errar de Onda Certera. Fuerza Lunar sigue siendo el seguro contra Siniestro y Onda Certera el golpe a Acero. La inversión en PS en lugar de Velocidad se justifica porque el set-up busca quedarse: Tapu Lele no es frágil (75/115/95) y el PS alto le permite aguantar el golpe del turno de set-up. Viable, no óptima, porque su 130 de SpA rinde más de entrada con Gafas Elección que tras un turno de riesgo.',
      alternatives: [
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Mofa impide que el muro rival se recupere o coloque trampas, cediendo el daño de Onda Certera.',
          replaces: 'FOCUSBLAST'
        },
        {
          slot: 'item',
          value: 'WEAKNESSPOLICY',
          note: 'Seguro Debilidad compensa la entrada: al recibir un golpe supereficaz sube Ataque y At. Esp. un nivel, apostando a que la Defensa 75 aguante.',
          replaces: 'LEFTOVERS'
        }
      ]
    }
  ]
}

export default tapulele