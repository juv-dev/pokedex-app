import type { PokemonTemplateSet } from '../../lib/types'

const servine: PokemonTemplateSet = {
  internalName: 'SERVINE',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'viable',
      ability: 'CONTRARY',
      item: 'EVIOLITE',
      nature: 'TIMID',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LEAFSTORM', 'GLARE', 'SYNTHESIS', 'LEECHSEED'],
      justification:
        'Mientras la línea no termina de evolucionar, Servine tiene un nicho real como usuario de Respondón. Lluvia de Hojas baja mucho el At.Esp de quien la usa, pero Respondón invierte ese cambio y lo convierte en +2, así que cada uso es a la vez STAB y subida de ofensiva. Con Mineral Evolutivo sus defensas 75/75 suben a nivel de muro, Síntesis lo cura, Fulgor (Glare) paraliza incluso a los inmunes a Onda Trueno y Drenadoras desgasta a los que se quedan. Se queda en Viable por su At.Esp base 70 y su falta de cobertura fuera del tipo Planta.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Aísla del estado mientras acumula At.Esp con Lluvia de Hojas, a cambio del desgaste de Drenadoras.',
          replaces: 'LEECHSEED'
        },
        {
          slot: 'move',
          value: 'DRAGONPULSE',
          note: 'Cobertura a otros Planta y a Dragón, en lugar de la parálisis de Fulgor.',
          replaces: 'GLARE'
        }
      ]
    }
  ]
}

export default servine
