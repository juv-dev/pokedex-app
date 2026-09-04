import type { PokemonTemplateSet } from '../../lib/types'

const dachsbun: PokemonTemplateSet = {
  internalName: 'DACHSBUN',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'WELLBAKEDBODY',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 4, 252, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BODYPRESS', 'PLAYROUGH', 'WISH', 'PROTECT'],
      justification:
        'En Añil V4.13 Dachsbun es de tipo Hada puro y su rol competitivo es el de pared física: la Defensa 115 es su mejor estadística y Ni las estadísticas ofensivas ni la Velocidad 95 alcanzan para un puesto ofensivo de primera línea. Cuerpo Horneado ("si lo alcanza un movimiento de tipo Fuego, aumenta mucho su Defensa en vez de sufrir daño") le da inmunidad de hecho al tipo Fuego y encima dispara su Defensa, doblando la sinergia con Plancha Corporal, que usa la Defensa propia para pegar. Carantoña es el STAB Hada que castiga a los atacantes de tipo Lucha y Dragón que intentan romper la pared. Deseo y Protección forman el núcleo de recuperación a prueba de errores, imprescindible porque los PS 57 son bajos y el Pokémon no tiene otro medio de curarse. Restos aportan curación pasiva extra. Naturaleza Agitada y reparto en PS y Defensa para maximizar el valor de Plancha Corporal y de Cuerpo Horneado.',
      alternatives: [
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga a los atacantes físicos de contacto con cerca de 1/6 de PS al golpear a la pared, a cambio de la curación pasiva de Restos.',
          replaces: 'LEFTOVERS'
        },
        {
          slot: 'ability',
          value: 'FLUFFY',
          note: 'Peluche reduce a la mitad el daño de contacto, pero duplica el de tipo Fuego, eliminando la inmunidad clave de Cuerpo Horneado.',
          replaces: 'WELLBAKEDBODY'
        },
        {
          slot: 'move',
          value: 'YAWN',
          note: 'Bostezo fuerza cambios o duerme al rival cuando Dachsbun no puede presionar con Carantoña, a cambio de un slot defensivo.',
          replaces: 'PROTECT'
        }
      ]
    }
  ]
}

export default dachsbun
