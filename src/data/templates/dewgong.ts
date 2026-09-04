import type { PokemonTemplateSet } from '../../lib/types'

const dewgong: PokemonTemplateSet = {
  internalName: 'DEWGONG',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'FURCOAT',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['ICEBEAM', 'SURF', 'REST', 'SLEEPTALK'],
      justification:
        'Dewgong en Añil V4.13 tiene PS 90 / Def 80 / Def. Esp. 95 y accede a Pelaje Recio, que reduce a la mitad el daño físico recibido. Con inversión completa en Defensa, esa habilidad hace que su defensa física efectiva se comporte como si tuviera un valor cercano a 160, y su tipo Agua/Hielo le da resistencias útiles a Agua, Hielo y Acero. La limitación real es la ausencia de recuperación instantánea en su repertorio: solo tiene Descanso y Anillo Acuático, por lo que el núcleo es Descanso más Sonámbulo para curarse y seguir actuando dormido. Rayo Hielo y Surf son los dos STAB para no ser pasivo mientras el muro cumple. Por esa dependencia de Descanso y por la falta de control de trampas queda en viable. Naturaleza Osada y reparto en PS y Defensa para maximizar lo que Pelaje Recio potencia; la Defensa Especial base 95 ya es suficiente sin inversión.',
      alternatives: [
        {
          slot: 'ability',
          value: 'THICKFAT',
          note: 'Sebo reduce a la mitad el daño de Fuego y Hielo, lo que hace de Dewgong un cambio seguro frente a atacantes de esos tipos, a cambio de la mitigación física general de Pelaje Recio.'
        },
        {
          slot: 'move',
          value: 'ENCORE',
          note: 'Otra Vez bloquea al rival en un movimiento de estado o de apoyo durante tres turnos y fuerza cambios, a cambio de la cobertura de Surf.',
          replaces: 'SURF'
        },
        {
          slot: 'move',
          value: 'HAZE',
          note: 'Niebla borra las subidas de estadística de ambos lados y anula a un setup sweeper que intente aprovechar el muro, cediendo un STAB.',
          replaces: 'SURF'
        }
      ]
    }
  ]
}

export default dewgong
