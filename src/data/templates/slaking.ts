import type { PokemonTemplateSet } from '../../lib/types'

const slaking: PokemonTemplateSet = {
  internalName: 'SLAKING',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'TRUANT',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DOUBLEEDGE', 'EARTHQUAKE', 'GUNKSHOT', 'KNOCKOFF'],
      justification:
        'Ataque 160 y PS 150 son valores de otro tier, y la Banda Elección los aprovecha para pegar golpes que muy pocos muros aguantan. La contrapartida es Pereza: cada dos turnos Slaking pierde la acción, así que la plantilla asume que solo atacará la mitad de los turnos y busca que ese turno sea decisivo. Doble Filo es el STAB de máxima potencia, con retroceso asumido; Terremoto y Lanzamugre son la cobertura para Acero, Roca y Hada; Desarme quita objetos y golpea a los fantasmas, inmunes a Doble Filo, además de dejar valor cuando Slaking se retira o cae. El plan de equipo debe cubrir el turno de ausencia con un cambio seguro o con prioridad propia.',
      alternatives: [
        {
          slot: 'move',
          value: 'RETURN',
          note: 'STAB de Normal sin retroceso; menos potencia pero evita el desgaste que se suma a los turnos de ausencia.',
          replaces: 'DOUBLEEDGE'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Empata o supera a otras bases 100 y a amenazas justo por encima antes del turno de ausencia.'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Convierte el turno activo en un revenge fiable pese a Pereza.'
        }
      ]
    }
  ]
}

export default slaking
