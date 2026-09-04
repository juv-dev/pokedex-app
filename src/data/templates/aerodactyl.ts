import type { PokemonTemplateSet } from '../../lib/types'

const aerodactyl: PokemonTemplateSet = {
  internalName: 'AERODACTYL',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRESSURE',
      item: 'FOCUSSASH',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'TAUNT', 'ROCKSLIDE', 'EARTHQUAKE'],
      justification:
        'Aerodactyl en Añil V4.13 tiene Velocidad 130, el segundo dato más alto de su rango, con Ataque 105 y defensas 65/75. Ese perfil lo define como lead: entra, y antes que casi cualquier rival coloca Trampa Rocas o corta con Mofa las trampas, la recuperación o las instalaciones del lead contrario. Banda Aguante garantiza que complete al menos una acción aunque enfrente a algo más rápido con prioridad o más fuerte. Avalancha es el STAB con opción de retroceso y Terremoto es la cobertura para Acero y Roca. Presión acelera el gasto de PP si sobrevive; la Velocidad hace el resto. Naturaleza Alegre para no perder ninguna carrera de la banda alta.',
      alternatives: [
        {
          slot: 'move',
          value: 'DUALWINGBEAT',
          note: 'Doble Ala es el STAB Volador y rompe Bandas Aguante y Robustez al golpear dos veces, cambio útil si el equipo teme leads con Banda Aguante propia.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Vendaval convierte a Aerodactyl en lead de control de trampas en lugar de colocador, según lo que pida la composición.',
          replaces: 'STEALTHROCK'
        },
        {
          slot: 'ability',
          value: 'UNNERVE',
          note: 'Nerviosismo impide que el rival consuma su baya, útil contra leads con Baya Zidra o Baya Aranja.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PRESSURE',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'DUALWINGBEAT', 'STONEEDGE', 'EARTHQUAKE'],
      justification:
        'Con Velocidad 130 de base, un solo turno de Danza Dragón deja a Aerodactyl fuera del alcance de todo el metajuego sin prioridad ni Pañuelo, y el Ataque 105 potenciado y con Vidasfera pega con contundencia. Doble Ala y Roca Afilada son los dos STAB y Terremoto cubre a Acero y Roca. La fragilidad física (Defensa 65) obliga a instalar contra un objetivo pasivo o tras un cambio forzado. Es una vía secundaria válida cuando el equipo ya cuenta con otro colocador de trampas.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Respiro recupera la mitad de los PS y prolonga el barrido, a cambio de la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        }
      ]
    }
  ]
}

export default aerodactyl
