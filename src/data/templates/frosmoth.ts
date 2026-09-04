import type { PokemonTemplateSet } from '../../lib/types'

const frosmoth: PokemonTemplateSet = {
  internalName: 'FROSMOTH',
  templates: [
    {
      role: 'weather-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SNOWWARNING',
      item: 'ICYROCK',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['QUIVERDANCE', 'AURORAVEIL', 'BLIZZARD', 'BUGBUZZ'],
      justification:
        'Frosmoth en Añil V4.13 tiene un At. Esp. 125 y acceso a Nevada (oculta), que invoca la nevada automáticamente al entrar durante 5 turnos (8 con la Roca Helada equipada). Ese clima hace que Ventisca, su STAB Hielo de 110 de potencia, acierte siempre, y activa Velo Aurora, que divide el daño físico y especial que recibe todo el equipo a la mitad. Danza Aleteo sube a la vez At. Esp., Def. Esp. y Velocidad para cerrar la partida, y Zumbido baja la Def. Esp. rival. Naturaleza Modesta con reparto 252 PS / 252 At. Esp. para aguantar el golpe de entrada y maximizar el cierre especial. Es la sinergia completa de nevada en una sola entrada: monta el clima, protege al equipo con Velo Aurora y se transforma en un sucio montador especial. Su Velocidad 65 y su Def 60 lo dejan vulnerable a los golpes físicos rápidos, el coste que paga por su nicho de clima.',
      alternatives: [
        {
          slot: 'ability',
          value: 'ICESCALES',
          note: 'Escama de Hielo divide a la mitad el daño especial recibido, gran para montar sin depender del clima, pero ya no garantiza la Ventisca precisa.'
        },
        {
          slot: 'ability',
          value: 'TINTEDLENS',
          note: 'Cromolente dobla el daño de los ataques poco eficaces, útil contra resistencias de Hielo/Bicho, a cambio de perder el auto-invoco de la nevada.'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta mantiene el momentum del clima al pivotar, a cambio de perder la protección por equipo de Velo Aurora.',
          replaces: 'AURORAVEIL'
        }
      ]
    }
  ]
}

export default frosmoth