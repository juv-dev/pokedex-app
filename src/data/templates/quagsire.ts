import type { PokemonTemplateSet } from '../../lib/types'

const quagsire: PokemonTemplateSet = {
  internalName: 'QUAGSIRE',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'UNAWARE',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'RECOVER', 'TOXIC', 'ICEBEAM'],
      justification:
        'Ignorancia ignora todas las subidas de características del rival al recibir el ataque, así que Quagsire frena en seco a los sweepers con Danza Espada, Paz Mental o Corpulencia sin importar cuántas veces se hayan potenciado. PS 95 y defensas 95/65 con Recuperación al 50 % lo hacen un muro físico sólido; su tipo Agua/Tierra solo teme a Planta. Terremoto es el STAB fiable, Tóxico mina a los muros y a los que no puede dañar, y Rayo Hielo, aunque salga de un Ataque Especial 65, es la respuesta a los Planta y Volador que esquivan Terremoto y lo amenazan. Naturaleza Agitada y reparto físico defensivo con Restos para repetir el ciclo toda la partida.',
      alternatives: [
        {
          slot: 'move',
          value: 'SCALD',
          note: 'Escaldar cambia la cobertura por un STAB de Agua con opción de quemar, más útil si el rival abusa de físicos que Ignorancia no cubre del todo.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas si el equipo necesita un colocador y ya tiene otra vía de desgaste distinta a Tóxico.',
          replaces: 'TOXIC'
        },
        {
          slot: 'move',
          value: 'YAWN',
          note: 'Bostezo fuerza cambios y abre turnos para curarse o colocar, a cambio del daño residual garantizado de Tóxico.',
          replaces: 'TOXIC'
        }
      ]
    }
  ]
}

export default quagsire
