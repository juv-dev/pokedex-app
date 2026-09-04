import type { PokemonTemplateSet } from '../../lib/types'

const relicanth: PokemonTemplateSet = {
  internalName: 'RELICANTH',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'viable',
      ability: 'ROCKHEAD',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'HEADSMASH', 'EARTHQUAKE', 'FLIPTURN'],
      justification:
        'Cabeza Roca anula por completo el retroceso de Testarazo, que pasa a ser un STAB Roca de 150 de potencia sin coste; combinado con Ataque 100 y un cuerpo de PS 100 / Defensa 130, Relicanth coloca Trampa Rocas y sigue pegando toda la partida. Terremoto es la cobertura para Acero, Fuego, Eléctrico y Veneno, y Vuelta Rápida mantiene el ritmo cediendo el turno con daño. Restos repone PS para repetir entradas. Firme con inversión en PS y Ataque aprovecha que su Velocidad 55 es causa perdida y su valor está en la dureza física y en Testarazo.',
      alternatives: [
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Plancha Corporal escala con la Defensa 130 y pega a Hielo, Siniestro y Normal sin invertir en Ataque.',
          replaces: 'FLIPTURN'
        },
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Roca Afilada evita el 80 de precisión y los pocos PP de Testarazo si se prioriza fiabilidad.',
          replaces: 'HEADSMASH'
        },
        {
          slot: 'move',
          value: 'ROCKPOLISH',
          note: 'Pulimento, junto con la habilidad Nado Rápido, convierte a Relicanth en un barredor de un solo uso en equipos de lluvia.',
          replaces: 'STEALTHROCK'
        }
      ]
    }
  ]
}

export default relicanth
