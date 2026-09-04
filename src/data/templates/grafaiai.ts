import type { PokemonTemplateSet } from '../../lib/types'

const grafaiai: PokemonTemplateSet = {
  internalName: 'GRAFAIAI',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'UNBURDEN',
      item: 'LIECHIBERRY',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'ACROBATICS', 'GUNKSHOT', 'KNOCKOFF'],
      justification:
        'El núcleo es la combinación de Aligerar con Acróbata: al consumirse la Baya Lichi, Grafaiai duplica su Velocidad (base 110, ya alta) y Acróbata pasa de 55 a 110 de potencia por quedarse sin objeto, mientras la baya además suma +1 al Ataque. Con Ataque 105 y Danza de Sable para potenciarlo, alcanza un perfil de sweeper físico novedoso. Disparo Lodo es el STAB Veneno (120 con precisión 90) y Desarme limpia objetos y castiga a los cambios. Naturaleza Alegre y reparto en Ataque y Velocidad para barrer tras la activación de Aligerar. Tipo Veneno/Normal le da inmunidad a Fantasma, y el acceso a Ida y Vuelta (alternativa) le permite conservar momentum si no puede limpiar.',
      alternatives: [
        {
          slot: 'ability',
          value: 'PRANKSTER',
          note: 'Cambia el rol a support de utilidad con Truco y Mofa que actúan primero; pierde la velocidad de Aligerar pero gana control de entrada.'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta mantiene el momentum tras golpear, reemplazando la presión inmediata de Trueno/Desarme.'
        }
      ]
    }
  ]
}

export default grafaiai
