import type { PokemonTemplateSet } from '../../lib/types'

const ninetales: PokemonTemplateSet = {
  internalName: 'NINETALES',
  templates: [
    {
      role: 'weather-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DROUGHT',
      item: 'HEATROCK',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FIREBLAST', 'SOLARBEAM', 'NASTYPLOT', 'WILLOWISP'],
      justification:
        'Ninetales en Añil V4.13 tiene un reparto redondo de 100 en At.Esp., Def.Esp. y Velocidad, y con Sequía como habilidad oculta ("cuando entra en combate induce clima soleado; con Roca Calor dura 8 turnos") es una invocadora de sol autosuficiente: no necesita apoyo para activar el clima que el resto del equipo aprovecha. Roca Calor extiende el sol a 8 turnos, ventana suficiente para que un compañero de Clorofila o un usuario de Rayo Solar trabajen. Llamarada bajo sol propio es el STAB reforzado, Rayo Solar se lanza en un turno mientras el sol está activo y castiga a Agua, Roca y Tierra que quieren entrar sobre el Fuego, y Fuego Fatuo mengua a los atacantes físicos que la amenazan. Maquinación aprovecha que la Velocidad 100 y el sol propio la dejan montar contra objetivos pasivos y cerrar ella misma. Miedosa y máxima Velocidad para asegurar el tramo 100 antes de colocar el clima.',
      alternatives: [
        {
          slot: 'move',
          value: 'WEATHERBALL',
          note: 'Bola Clima pasa a tipo Fuego y 100 de potencia bajo su propio sol; segundo golpe de Fuego más fiable que Llamarada si el equipo no puede permitirse el fallo.',
          replaces: 'WILLOWISP'
        },
        {
          slot: 'move',
          value: 'DAZZLINGGLEAM',
          note: 'Deslumbrar cubre a Dragón y Siniestro que resisten los dos ataques principales.',
          replaces: 'NASTYPLOT'
        },
        {
          slot: 'move',
          value: 'ENERGYBALL',
          note: 'Bola Energía es cobertura de un turno contra Agua y Roca sin depender de que el sol siga activo, a cambio de menos potencia que Rayo Solar.',
          replaces: 'SOLARBEAM'
        }
      ]
    }
  ]
}

export default ninetales
