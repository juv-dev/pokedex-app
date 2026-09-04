import type { PokemonTemplateSet } from '../../lib/types'

const mudsdale: PokemonTemplateSet = {
  internalName: 'MUDSDALE',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STAMINA',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 4, 252, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BODYPRESS', 'EARTHQUAKE', 'STEALTHROCK', 'REST'],
      justification:
        'Mudsdale convierte Firmeza en un motor doble: cada golpe físico recibido sube su Defensa un nivel, lo que a la vez lo hace más resistente y sube el daño de Plancha Corporal (80, que usa la Defensa del usuario en vez del Ataque). Con PS 100 / Def 100 / Def. Esp. 85 y Velocidad 35, su rol es absorber y responder lento: Terremoto (100, STAB) golpea el lado físico con Ataque 125 de base, mientras Plancha Corporal pega duro sin depender de la misma estadística y castiga a los que intentan bajarle el Ataque con Encanto o pantallas. Trampa Rocas aprovecha los turnos de pared para abrir la partida, y Descanso es la única recuperación del repertorio: cura todo y deja al muro dormido dos turnos, un coste que el conjunto PS/Def y los Restos mitigan porque el resto del turno sigue sumando niveles de Firmeza. La inversión 252 PS / 252 Def con Agitada maximiza justo la estadística que alimenta a Plancha Corporal; el Ataque Especial no se toca porque el set es físico. La Velocidad 35 no importa porque el intercambio es el que manda.',
      alternatives: [
        {
          slot: 'move',
          value: 'IRONDEFENSE',
          note: 'Defensa Férrea dispara la Defensa dos niveles, multiplicando el daño de Plancha Corporal y la resistencia física, cediendo la trampa de entrada.',
          replaces: 'STEALTHROCK'
        },
        {
          slot: 'move',
          value: 'ROCKSLIDE',
          note: 'Avalancha castiga a los Voladores inmunes a Terremoto y añade flinch, a cambio de la recuperación total de Descanso.',
          replaces: 'REST'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga a los atacantes de contacto que alimentan Firmeza, intercambiando longevidad por presión pasiva.'
        }
      ]
    }
  ]
}

export default mudsdale