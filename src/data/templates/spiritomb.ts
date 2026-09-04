import type { PokemonTemplateSet } from '../../lib/types'

const spiritomb: PokemonTemplateSet = {
  internalName: 'SPIRITOMB',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRESSURE',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['FOULPLAY', 'WILLOWISP', 'PAINSPLIT', 'SUCKERPUNCH'],
      justification:
        'Defensas de 108 y 108 sobre el tipo Fantasma/Siniestro, que en Añil solo teme a Hada e ignora Normal, Lucha y Psíquico. Fuego Fatuo quema y deja a Juego Sucio calculando con el Ataque ya reducido del rival, así que Spiritomb no necesita invertir un solo EV en Ataque. Divide Dolor iguala PS y le sirve de recuperación aprovechando su PS base bajo. Golpe Bajo castiga a los atacantes especiales frágiles que intenten forzarlo. Presión acelera el gasto de PP de quien insista en pegarle. Cauta para maximizar el flanco especial, ya que del físico se encarga la quemadura. El IV de Ataque en 0 reduce lo que recibe de confusión y de Juego Sucio rival.',
      alternatives: [
        {
          slot: 'move',
          value: 'HEX',
          note: 'Daño constante que se dobla contra el objetivo quemado por Fuego Fatuo, a cambio de la prioridad de Golpe Bajo.',
          replaces: 'SUCKERPUNCH'
        },
        {
          slot: 'ability',
          value: 'INFILTRATOR',
          note: 'Ignora Sustituto y pantallas rivales si el metajuego local abusa de ellos.'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Castigo extra al contacto para minar más rápido a los físicos, cediendo la recuperación pasiva de Restos.'
        }
      ]
    }
  ]
}

export default spiritomb
