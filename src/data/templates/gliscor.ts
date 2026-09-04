import type { PokemonTemplateSet } from '../../lib/types'

const gliscor: PokemonTemplateSet = {
  internalName: 'GLISCOR',
  templates: [
    {
      role: 'stall',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'POISONHEAL',
      item: 'TOXICORB',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'ROOST', 'TOXIC', 'PROTECT'],
      justification:
        'Antídoto convierte el envenenamiento grave de la Toxisfera en una cura de 1/8 de los PS cada turno. Con PS 75 / Def 125 y tipo Tierra/Volador (inmune a Tierra, resiste Lucha y Bicho), Gliscor se planta ante medio metajuego físico. Protección alarga el reloj y anula el daño residual del rival mientras Antídoto sigue curando; Aterrizaje rellena; Terremoto es el único ataque necesario; Tóxico pudre a los muros que intenten quedarse. Agitada maximiza la Defensa física, que es donde recibe la mayoría de los golpes.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'SubTóxico: el Sustituto bloquea estados y movimientos de estado del rival y se paga con la cura de Antídoto.',
          replaces: 'PROTECT'
        },
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Aprovecha la longevidad de Antídoto para colocar trampas a lo largo de la partida.',
          replaces: 'TOXIC'
        },
        {
          slot: 'nature',
          value: 'CAREFUL',
          note: 'Reorienta el aguante hacia el lado especial si el equipo ya cubre a los físicos.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'POISONHEAL',
      item: 'TOXICORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'EARTHQUAKE', 'KNOCKOFF', 'ROOST'],
      justification:
        'La misma base de Antídoto y Toxisfera, ahora ofensiva: Danza Espada sobre Atq 95 y Velocidad 95 con recuperación pasiva de 1/8 por turno más Aterrizaje hace a Gliscor un barredor muy difícil de desgastar. Terremoto de STAB y Desarme para los Fantasma y para quitar objetos defensivos. Alegre para alcanzar la mayor cantidad de objetivos posible tras el +2.',
      alternatives: [
        {
          slot: 'move',
          value: 'PROTECT',
          note: 'Activa la Toxisfera de forma segura el turno de entrada antes de empezar a preparar.',
          replaces: 'KNOCKOFF'
        }
      ]
    }
  ]
}

export default gliscor
