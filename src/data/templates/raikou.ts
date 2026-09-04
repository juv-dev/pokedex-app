import type { PokemonTemplateSet } from '../../lib/types'

const raikou: PokemonTemplateSet = {
  internalName: 'RAIKOU',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRESSURE',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'SUBSTITUTE', 'THUNDERBOLT', 'AURASPHERE'],
      justification:
        'Raikou combina At. Esp. 115, Velocidad 115 y PS 90 con acceso a Paz Mental y Sustituto: el plan no es superar en velocidad sino montar Sustituto detrás de un cambio forzado y acumular Paz Mental a salvo de estados y de golpes que no rompan la copia. Con At. Esp. y Def. Esp. subidos, Rayo (STAB) cierra la partida y Esfera Aural (infalible) castiga a los Normal y Acero que suelen entrar a frenar al Eléctrico. Los 252 PS hacen que cada Sustituto cueste una fracción asumible y aguanten mejor la prioridad y el daño de pícado. Miedosa mantiene el tier de velocidad base 115 sin sacrificar Ataque físico que no usa. Presión acelera el desgaste de PP de los muros que intenten sentarse enfrente. Restos regenera lo invertido en cada Sustituto.',
      alternatives: [
        {
          slot: 'move',
          value: 'EXTRASENSORY',
          note: 'Paranormal pega a los Lucha y Veneno que ignoran a Esfera Aural y mantiene la presión sobre Toxapex y compañía.',
          replaces: 'AURASPHERE'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Con Gafas Elección el juego pasa a Voltiocambio / Rayo / Esfera Aural / Paranormal: pivote ofensivo que golpea durísimo y cede el turno, renunciando a Paz Mental y Sustituto.'
        },
        {
          slot: 'ability',
          value: 'VOLTABSORB',
          note: 'Absorbe Elec. da inmunidad al tipo Eléctrico y cura 1/4 de PS, lo que le permite entrar gratis a los ataques eléctricos rivales.'
        },
        {
          slot: 'nature',
          value: 'MODEST',
          note: 'Modesta sube el pico de daño si el equipo ya aporta control de velocidad y Raikou solo necesita romper tras el setup.'
        }
      ]
    }
  ]
}

export default raikou
