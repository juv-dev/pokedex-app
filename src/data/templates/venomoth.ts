import type { PokemonTemplateSet } from '../../lib/types'

const venomoth: PokemonTemplateSet = {
  internalName: 'VENOMOTH',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TINTEDLENS',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['QUIVERDANCE', 'BUGBUZZ', 'SLUDGEBOMB', 'SLEEPPOWDER'],
      justification:
        'Venomoth en Añil V4.13 tiene At.Esp 100 y Velocidad 90, y su set definitorio combina Danza Aleteo con Cromolente. Danza Aleteo ("sube el Ataque Especial, la Defensa Especial y la Velocidad") lo lanza a rango de barrido en un solo turno, y desde ahí Cromolente ("potencia los movimientos poco eficaces haciendo el doble de daño") hace que Zumbido y Bomba Lodo peguen como neutros incluso a los tipos que los resisten: con esos dos ataques Venomoth cubre casi toda la tabla sin necesitar un tercer golpe. Somnífero abre el turno de setup desactivando a un rival que no amenace de inmediato. Vidasfera suma el empujón de potencia que una base 100 necesita para asegurar los KO tras +1. Miedosa y máxima Velocidad para que el primer Danza Aleteo se monte por delante del tramo 90 y de buena parte de las bases 100.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Sustituto protege el setup de estados y prioridad si el equipo ya tiene otra inducción de sueño, a cambio de perder el control que da Somnífero.',
          replaces: 'SLEEPPOWDER'
        },
        {
          slot: 'move',
          value: 'PSYCHIC',
          note: 'Psíquico castiga a Lucha y Veneno que amenazan y a Toxapex; con Cromolente Zumbido y Bomba Lodo ya cubren el resto, así que es lujo situacional.',
          replaces: 'SLUDGEBOMB'
        },
        {
          slot: 'item',
          value: 'BLACKSLUDGE',
          note: 'Lodo Negro cambia el pico de daño por una cura pasiva de 1/16 por turno, aprovechando el tipo Veneno, y sostiene un uso más largo tras varios Danza Aleteo.'
        }
      ]
    }
  ]
}

export default venomoth
