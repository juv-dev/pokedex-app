import type { PokemonTemplateSet } from '../../lib/types'

const coalossal: PokemonTemplateSet = {
  internalName: 'COALOSSAL',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FLAMEBODY',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'FLAREBLITZ', 'WILLOWISP', 'RAPIDSPIN'],
      justification:
        'El rol óptimo de Coalossal en Añil V4.13 es el de tanque colocador de Trampa Rocas con retirada propia: PS 110, Defensa 120 y Defensa Especial 90, con la combinación de Trampa Rocas, Púas y Giro Rápido en el mismo movepool. Cuerpo Llama quema al 30% a cualquier atacante de contacto que entre a romperlo, y Fuego Fatuo añade la quemadura segura contra físicos que no usen contacto; entre la quemadura, que corta el Ataque a la mitad, y la Defensa 120, el lado físico queda cerrado, por eso la inversión va al lado especial: Cauta con 252 PS / 252 Defensa Especial. Envite Ígneo es el STAB físico de 120 que castiga a los leads con Mofa que intenten dejar al set sin ataques, y Giro Rápido le permite quitarse las trampas a sí mismo cuando hace falta. Restos sostienen la estancia larga; la debilidad x4 a Agua y Tierra se paga con cambios bien leídos.',
      alternatives: [
        {
          slot: 'move',
          value: 'SPIKES',
          note: 'Púas añade una segunda capa de trampa para equipos con spinner propio, cediendo el golpe físico anti-Mofa.',
          replaces: 'FLAREBLITZ'
        },
        {
          slot: 'ability',
          value: 'FLASHFIRE',
          note: 'Absorbe Fuego convierte los movimientos de Fuego en inmunidad y +50% para sus ataques de Fuego, cediendo el castigo por contacto de Cuerpo Llama.'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado se suma a Cuerpo Llama para desgastar al doble a los atacantes de contacto, a cambio de la recuperación de Restos.'
        }
      ]
    },
    {
      role: 'sweeper-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'STEAMENGINE',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['ROCKPOLISH', 'FLAREBLITZ', 'STONEEDGE', 'EARTHQUAKE'],
      justification:
        'Variante ofensiva viable que convierte la debilidad en motor: Combustible sube la Velocidad en seis niveles si le alcanza un movimiento de Fuego o Agua, así que un golpe predicho de esos tipos convierte a este tanque de Velocidad 30 en el Pokémon más rápido del campo en un turno. Pulimento es el plan B sin depender del rival: duplica la velocidad y, con Alegre y 252 EV, tras el +2 supera los 330 puntos efectivos, suficiente para adelantarse a casi todo el tier. Envite Ígneo, Roca Afilada y Terremoto forman la cobertura Roca/Fuego/Tierra que casi nada resiste entera, y Vidasfera potencia los tres golpes. Es viable y no óptimo porque necesita un turno de setup o que el rival caiga en el anzuelo de Fuego/Agua, y porque recibir un Agua en su debilidad x4 suele significar KO antes de disfrutar el +6.',
      alternatives: [
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Plancha Corporal aprovecha la Defensa 120 y evita la precisión 80 de Roca Afilada, a cambio de perder el golpe limpio a Voladores.',
          replaces: 'STONEEDGE'
        }
      ]
    }
  ]
}

export default coalossal