import type { PokemonTemplateSet } from '../../lib/types'

const pyroar: PokemonTemplateSet = {
  internalName: 'PYROAR',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INTIMIDATE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FIREBLAST', 'HYPERVOICE', 'DARKPULSE', 'WILLOWISP'],
      justification:
        'Fuego/Normal con At. Esp. 115 y Velocidad 106. El valor real es el par de STAB: Fuego y Normal combinados casi no tienen resistencias, solo los Fuego/Roca y algún Fuego puro aguantan las dos. Llamarada es el ataque principal de 110 y Vozarrón el STAB Normal de 90; Pulso Umbrío cubre Psíquico y Fantasma. Intimidación (habilidad oculta) le da algo que no tiene por stats: cambios seguros ante atacantes físicos, bajándoles el Ataque al entrar. Fuego Fatuo mutila a los muros físicos que intentan pararlo, y como Pyroar no tiene recuperación y es muy frágil (Def 72 / Def.Esp 66), alargar su ventana de ruptura quemando switch-ins es clave. Miedosa para los 106 de Velocidad.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Potencia inmediata; en ese caso se cambia Fuego Fatuo por un cuarto ataque especial como Alarido.'
        },
        {
          slot: 'move',
          value: 'OVERHEAT',
          note: 'Un golpe único más fuerte de 130 a cambio de bajarse el At. Esp. dos niveles.',
          replaces: 'FIREBLAST'
        },
        {
          slot: 'ability',
          value: 'UNNERVE',
          note: 'Niega las bayas defensivas del rival como Baya Zidra si preferís no depender de la habilidad oculta.'
        }
      ]
    }
  ]
}

export default pyroar
