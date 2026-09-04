import type { PokemonTemplateSet } from '../../lib/types'

const tinkaton: PokemonTemplateSet = {
  internalName: 'TINKATON',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MOLDBREAKER',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'GIGATONHAMMER', 'PLAYROUGH', 'KNOCKOFF'],
      justification:
        'El núcleo es la firma: Martillo Gigatón, un STAB Acero de 160 de potencia que solo no puede elegirse dos turnos seguidos, convierte a Tinkaton en un peligro inmediato con Ataque 90. Se combina con Danza de Sable para potenciarlo y con Rompemoldes, que ignora habilidades del rival como Cabeza Roca, Levitación o Cuerpo Puro, maximizando su utilidad contra muros. Carantoña es el segundo STAB Hada, y Desarme castiga a los cambios y retira objetos. Naturaleza Firme y reparto en PS y Ataque; su Defensa Especial 105 y el gran tipo Hada/Acero le dan oportunidades de entrar y preparar el martillo. Restos cubren la recuperación porque no tiene movimiento propio de curación.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno ralentiza sweepers rivales y apoya al equipo, reemplazando Carantoña en un set más orientado a utilidad.'
        },
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas da utilidad de entrada al equipo, reemplazando Carantoña en un set más orientado a apoyo.'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Chaleco Asalto aprovecha la Defensa Especial 105 para un set de cuatro ataques sin Danza de Sable.'
        }
      ]
    }
  ]
}

export default tinkaton
