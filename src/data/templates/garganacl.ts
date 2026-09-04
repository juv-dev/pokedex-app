import type { PokemonTemplateSet } from '../../lib/types'

const garganacl: PokemonTemplateSet = {
  internalName: 'GARGANACL',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PURIFYINGSALT',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['IRONDEFENSE', 'BODYPRESS', 'SALTCURE', 'RECOVER'],
      justification:
        'Garganacl en Añil V4.13 es un tanque Roca de primera línea: PS 100 y Defensa 130 con Velocidad 35 lo sacan del tramo ofensivo pero le dan el volumen y la Defensa para aguantar golpes físicos repetidos. Sal Purificadora ("lo protege de los problemas de estado y reduce a la mitad el daño que recibe de ataques de tipo Fantasma") es la habilidad firma: anula quemaduras, parálisis y demás estados y hace que los chequeos Fantasma, la mayor amenaza del tipo Roca, peguen a la mitad. El núcleo de daño es Defensa Férrea más Plancha Corporal, que usa la Defensa 130 para pegar y escala con cada subida; Salazón añade daño residual que castiga sobre todo a los tipos Agua y Acero que intentan cebarlo; y Recuperación sostiene el intercambio. Restos aportan curación pasiva. Naturaleza Agitada y reparto en PS y Defensa para maximizar tanto la supervivencia como el daño de Plancha Corporal.',
      alternatives: [
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas añade la función de colocar entradas si el equipo lo necesita, a cambio de uno de los dos movimientos de daño.',
          replaces: 'SALTCURE'
        },
        {
          slot: 'move',
          value: 'CURSE',
          note: 'Maldición sube Ataque y Defensa a costa de Velocidad, potenciando Plancha Corporal de forma alternativa a Defensa Férrea.',
          replaces: 'IRONDEFENSE'
        },
        {
          slot: 'ability',
          value: 'STURDY',
          note: 'Robustez garantiza aguantar un golpe a PS plenos, útil para colocar una utilidad de último momento, a cambio de la inmunidad a estado.',
          replaces: 'PURIFYINGSALT'
        }
      ]
    }
  ]
}

export default garganacl
