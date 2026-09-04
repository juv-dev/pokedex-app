import type { PokemonTemplateSet } from '../../lib/types'

const pangoro: PokemonTemplateSet = {
  internalName: 'PANGORO',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SCRAPPY',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CLOSECOMBAT', 'KNOCKOFF', 'GUNKSHOT', 'ICEPUNCH'],
      justification:
        'Lucha/Siniestro con Ataque 124 y Velocidad 58. Intrépido (habilidad oculta) hace que los movimientos de tipo Normal y Lucha alcancen a los tipo Fantasma y vuelve a Pangoro inmune a Intimidación, así que A Bocajarro no tiene inmunidades y golpea a todo el tablero. La Cinta Elección sobre 124 de Ataque convierte cada golpe en una amenaza: A Bocajarro STAB de 120, Desarme STAB Siniestro que además quita el objeto, Lanzamugre de 120 para las Hadas que si no lo muran, y Puño Hielo para Volador, Dragón y Tierra. Con Velocidad 58 es un rompemuros lento, no un barredor, así que Firme maximiza el pico de daño.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAINPUNCH',
          note: 'Con Puño Férreo recupera PS y no baja defensas, a cambio de bajar a 75 de potencia; conviene cambiar también la habilidad a Puño Férreo.',
          replaces: 'CLOSECOMBAT'
        },
        {
          slot: 'move',
          value: 'PARTINGSHOT',
          note: 'En un set sin Cinta baja Ataque y At. Esp. del rival y sale: utilidad de pivote, a cambio de un ataque.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Cobertura de tipo Tierra para Acero, Fuego y Veneno si el equipo ya trata a las Hadas por otro lado.',
          replaces: 'GUNKSHOT'
        },
        {
          slot: 'ability',
          value: 'IRONFIST',
          note: 'Si el núcleo del set usa Puño Hielo, Puño Drenaje y Puño Trueno, sube su potencia un 20%.'
        }
      ]
    }
  ]
}

export default pangoro
