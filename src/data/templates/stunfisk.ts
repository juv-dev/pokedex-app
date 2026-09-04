import type { PokemonTemplateSet } from '../../lib/types'

const stunfisk: PokemonTemplateSet = {
  internalName: 'STUNFISK',
  templates: [
    {
      role: 'wall-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STORMDRAIN',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'DISCHARGE', 'EARTHPOWER', 'PAINSPLIT'],
      justification:
        'El perfil de PS 109 / Def 84 / Def.Esp 99 y una Velocidad de 32 dejan claro que es un muro y no otra cosa. La clave es la habilidad oculta Colector: sobre el tipo Tierra/Eléctrico ya de por sí bueno defensivamente, añade inmunidad total al tipo Agua y un nivel de Ataque Especial cada vez que la absorbe, con lo que su única debilidad relevante pasa a ser el tipo Tierra. Trampa Rocas aprovecha su seguridad de entrada para montar el peligro de entrada. Chispazo es la STAB fiable con opción de parálisis y Tierra Viva castiga a los Pokémon de Acero y Veneno que ignoran la parálisis; ambos escalan si Colector se activa. Repartir Dolor es su única forma de recuperar PS de manera semiconstante y castiga especialmente a los rivales voluminosos. Osada porque el tipo Tierra rival casi siempre llega por el lado físico (Terremoto) y la Def.Esp ya es alta de base.',
      alternatives: [
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Cambia la recuperación por presión a largo plazo contra muros y Pokémon voluminosos.',
          replaces: 'PAINSPLIT'
        },
        {
          slot: 'move',
          value: 'SCALD',
          note: 'Aporta una opción de quemadura que ablanda a los atacantes físicos, a costa de la cobertura de Tierra Viva.',
          replaces: 'EARTHPOWER'
        },
        {
          slot: 'nature',
          value: 'CALM',
          note: 'Refuerza el lado especial y potencia la sinergia con el nivel de Ataque Especial que regala Colector.'
        }
      ]
    }
  ]
}

export default stunfisk
