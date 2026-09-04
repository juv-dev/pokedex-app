import type { PokemonTemplateSet } from '../../lib/types'

const dialga: PokemonTemplateSet = {
  internalName: 'DIALGA',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRESSURE',
      item: 'LEFTOVERS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'DRACOMETEOR', 'FLASHCANNON', 'FIREBLAST'],
      justification:
        'At.Esp 150 con aguante 100/120/120/100 y tipo Acero/Dragón, uno de los mejores defensivos del juego: resiste Normal, Volador, Roca, Acero, Veneno, Bicho, Psíquico, Eléctrico, Fuego, Agua, Planta y Dragón. Con ese perfil coloca Trampa Rocas con enorme comodidad. Cometa Draco pega un pico gigante aunque baje el At.Esp, Foco Resplandor es el STAB estable de cobertura a Hada, y Onda Ígnea rompe a Ferrothorn y a los Acero que aguantan todo lo demás. Presión desgasta los PP de quien lo enfrenta. Modesta prioriza potencia sobre una Velocidad 90 que no es determinante.',
      alternatives: [
        {
          slot: 'move',
          value: 'AURASPHERE',
          note: 'Cobertura a Acero, Normal y Siniestro con precisión perfecta, a cambio del castigo a Ferrothorn de Onda Ígnea.',
          replaces: 'FIREBLAST'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Apoyo de parálisis si otro miembro del equipo se encarga de las trampas.',
          replaces: 'STEALTHROCK'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PRESSURE',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRACOMETEOR', 'FLASHCANNON', 'FIREBLAST', 'THUNDERBOLT'],
      justification:
        'Con Gafas Elección y Miedosa, Cometa Draco desde 150 de At.Esp es una de las armas más potentes del tier y muy pocas cosas la aguantan dos veces. Foco Resplandor, Onda Ígnea y Rayo cubren lo que resiste Dragón (Hada, Acero, Agua). El tipo Acero/Dragón le permite entrar gratis en multitud de ataques antes de disparar.',
      alternatives: [
        {
          slot: 'nature',
          value: 'MODEST',
          note: 'Sube el pico de daño a cambio de perder algunas carreras de Velocidad contra la base 90 rival.'
        }
      ]
    }
  ]
}

export default dialga
