import type { PokemonTemplateSet } from '../../lib/types'

const dragonite: PokemonTemplateSet = {
  internalName: 'DRAGONITE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MULTISCALE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'DRAGONCLAW', 'EXTREMESPEED', 'EARTHQUAKE'],
      justification:
        'Dragonite en Añil V4.13 tiene Ataque 134, defensas 95/100 y PS 91, con Velocidad 80. Compensación reduce a la mitad el daño recibido a PS completos, lo que garantiza un turno de Danza Dragón contra casi cualquier atacante; Botas Gruesas evitan que Trampa Rocas rompa esa condición al entrar. Tras un baile, Garra Dragón es el STAB fiable y Terremoto castiga a Acero, Roca y Eléctrico. Velocidad Extrema es prioridad +2 sobre Ataque 134: sirve para rematar a barredores más rápidos y para limpiar al final aunque Dragonite no haya bailado. Naturaleza Firme para maximizar el daño, ya que un solo baile suele bastar para superar el rango relevante.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Respiro restaura los PS y con ellos la mitigación de Compensación, alargando el barrido, a cambio de la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'move',
          value: 'SCALESHOT',
          note: 'Ristra Escamas golpea varias veces y sube la Velocidad; con Dados Trucados garantiza cinco impactos y rompe Robustez y Bandas Aguante.',
          replaces: 'DRAGONCLAW'
        },
        {
          slot: 'item',
          value: 'LUMBERRY',
          note: 'Baya Zidra limpia un estado alterado que podría cortar el barrido, a cambio de exponer Compensación a Trampa Rocas.'
        },
        {
          slot: 'ability',
          value: 'INNERFOCUS',
          note: 'Fuerza Mental da inmunidad al amedrentamiento y a la bajada de Ataque de Intimidación, opción defensiva puntual frente a Compensación.'
        }
      ]
    },
    {
      role: 'bulky-attacker',
      isPrimary: false,
      confidence: 'viable',
      ability: 'MULTISCALE',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EXTREMESPEED', 'DRAGONCLAW', 'EARTHQUAKE', 'FIREPUNCH'],
      justification:
        'Con Ataque 134 y Banda Elección, Velocidad Extrema se convierte en una de las mejores herramientas de prioridad del rango: revienta a barredores frágiles y cierra partidas ignorando la carrera de Velocidad. Garra Dragón es el STAB bloqueado por defecto, Terremoto y Puño Fuego cubren a Acero y Roca. Compensación y el buen volumen 91/95/100 permiten entrar a varios ataques antes de empezar a repartir. Es la alternativa cuando el equipo necesita presión inmediata y prioridad potente en lugar de una condición de victoria por instalación.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICESPINNER',
          note: 'Trompo Gélido pega a otros Dragón y a Tierra y Volador, y elimina el terreno activo, alternativa de cobertura a Puño Fuego.',
          replaces: 'FIREPUNCH'
        }
      ]
    }
  ]
}

export default dragonite
