import type { PokemonTemplateSet } from '../../lib/types'

const jellicent: PokemonTemplateSet = {
  internalName: 'JELLICENT',
  templates: [
    {
      role: 'wall-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'WATERABSORB',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SCALD', 'RECOVER', 'WILLOWISP', 'SHADOWBALL'],
      justification:
        'PS 100 con Def.Esp 105 y el tipo Agua/Fantasma hacen de Jellicent un muro especial y bloqueador de Giro Rápido de primer nivel. Absorbe Agua le da inmunidad a los ataques de Agua y le cura 1/4 de sus PS, así que entra gratis a Escaldar, Surf e Hidrobomba. Escaldar es la STAB con opción de quemar, que evita que sea presa pasiva y de paso mina a los físicos. Recuperación es la cura fiable que sostiene el muro. Fuego Fatuo cripplea a los atacantes físicos que intentan romperlo, reforzando su lado más flojo. Bola Sombra es la STAB de Fantasma para castigar a Psíquico y a otros Fantasma y no ser bait de setup. Naturaleza Serena y reparto en Def.Esp. porque su Defensa física la cubre Fuego Fatuo; Restos por la cura pasiva que hace de su recuperación un recurso casi infinito.',
      alternatives: [
        {
          slot: 'ability',
          value: 'CURSEDBODY',
          note: 'Un 30% de anular el movimiento del rival durante cuatro turnos: disrupción pasiva si no se necesita la inmunidad a Agua.'
        },
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Frena trampas, recuperación y setup de los muros rivales.',
          replaces: 'WILLOWISP'
        },
        {
          slot: 'move',
          value: 'STRENGTHSAP',
          note: 'Cura en función del Ataque rival y además lo baja un nivel, muy fuerte contra físicos; poco fiable contra especiales.',
          replaces: 'RECOVER'
        },
        {
          slot: 'move',
          value: 'HEX',
          note: 'Base 65 que se dobla si el objetivo está quemado o envenenado, en sinergia con Fuego Fatuo.',
          replaces: 'SHADOWBALL'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Si el equipo carga de trampas y Jellicent necesita entrar sin pagar Trampa Rocas en cada reentrada.'
        }
      ]
    }
  ]
}

export default jellicent
