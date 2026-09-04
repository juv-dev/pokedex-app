import type { PokemonTemplateSet } from '../../lib/types'

const ferrothorn: PokemonTemplateSet = {
  internalName: 'FERROTHORN',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'IRONBARBS',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 168, 0, 88, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'SPIKES', 'LEECHSEED', 'POWERWHIP'],
      justification:
        'Def 131 y Def.Esp 116 sobre PS 74, con un tipo Planta/Acero que reparte resistencias por todo el juego: Ferrothorn es el colocador de trampas y muro de referencia del rango. Trampa Rocas y Púas montan el daño de entrada; Drenadoras le da recuperación pasiva y presiona a cualquier cosa que se quede delante; Latigazo es la STAB de Planta que impide que sea presa de Mofa o de un setup y castiga a los Agua y Tierra voluminosos que serían su switch-in natural. Punta Acero suma 1/8 de daño a cada golpe de contacto, que se acumula con Drenadoras y las trampas para desgastar sin hacer nada. Naturaleza Agitada y reparto físico defensivo porque su Def.Esp. de partida ya es enorme; Restos por la cura pasiva. Velocidad 20 sin invertir: nunca le interesa la iniciativa y así habilita Giro Bola como alternativa.',
      alternatives: [
        {
          slot: 'move',
          value: 'GYROBALL',
          note: 'STAB de Acero devastadora desde Velocidad 20 con IV a 0 y naturaleza Plácida; castiga a Hada y Hielo mejor que Latigazo.',
          replaces: 'POWERWHIP'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Retira objetos clave (Botas, bayas) del rival; utilidad constante.',
          replaces: 'SPIKES'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Usa los 131 de Defensa como ataque; buena sinergia si se añade Defensa Férrea.',
          replaces: 'LEECHSEED'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Control de velocidad para el equipo.',
          replaces: 'SPIKES'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Junto a Punta Acero, dos fuentes de daño por contacto que castigan a cualquier físico que lo golpee.'
        }
      ]
    }
  ]
}

export default ferrothorn
