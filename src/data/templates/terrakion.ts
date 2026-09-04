import type { PokemonTemplateSet } from '../../lib/types'

const terrakion: PokemonTemplateSet = {
  internalName: 'TERRAKION',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'JUSTIFIED',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'CLOSECOMBAT', 'STONEEDGE', 'EARTHQUAKE'],
      justification:
        'Ataque 129 y Velocidad 108 hacen de Terrakion un barredor físico de primer nivel, y la combinación de STAB Roca/Lucha es de las mejores del juego en cobertura ofensiva neutra. Danza Espada dobla el Ataque y con esa Velocidad basta un turno para amenazar a todo el equipo rival. A Bocajarro y Roca Afilada son las dos STAB, y Terremoto completa el trío para pegar a los Acero, Veneno y Fuego que resisten alguna de las dos. Vidasfera da potencia constante sin bloquear movimientos, importante porque el set necesita elegir el ataque correcto tras la mejora. Justiciero puede regalar un nivel de Ataque extra si entra contra un movimiento de tipo Siniestro. Alegre para no ceder la iniciativa a la banda de bases 100-110.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta para presión inmediata sin necesidad de montar Danza Espada, a costa de quedar bloqueado.'
        },
        {
          slot: 'move',
          value: 'ROCKSLIDE',
          note: 'Avalancha cambia potencia por precisión perfecta si Roca Afilada falla cálculos decisivos.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas si se quiere un lead ofensivo que además deje el peligro de entrada montado.',
          replaces: 'SWORDSDANCE'
        }
      ]
    },
    {
      role: 'revenge-killer',
      isPrimary: false,
      confidence: 'viable',
      ability: 'JUSTIFIED',
      item: 'CHOICESCARF',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CLOSECOMBAT', 'STONEEDGE', 'EARTHQUAKE', 'QUICKATTACK'],
      justification:
        'Pañuelo Elección sobre base 108 de Velocidad lo convierte en un revenge killer que adelanta a casi todo el entorno no prioritario. A Bocajarro, Roca Afilada y Terremoto mantienen la cobertura casi perfecta de la línea, y Ataque Rápido remata a los frágiles que sobreviven con un hilo de vida o que llevan su propia prioridad. Es una opción viable frente al set de Danza Espada cuando el equipo necesita control de velocidad más que un ganador de partidas.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROCKSLIDE',
          note: 'Avalancha por fiabilidad si se prefiere no arriesgar la precisión de Roca Afilada en un revenge.',
          replaces: 'STONEEDGE'
        }
      ]
    }
  ]
}

export default terrakion
