import type { PokemonTemplateSet } from '../../lib/types'

const clodsire: PokemonTemplateSet = {
  internalName: 'CLODSIRE',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'WATERABSORB',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'SPIKES', 'EARTHQUAKE', 'TOXIC'],
      justification:
        'Clodsire es un muro voluminoso (PS 130, Def. Esp. 100) cuyo paquete de trampas es el más completo del rango: Trampa Rocas, Púas y Toxic suben, mientras Absorbe Agua convierte los movimientos de agua rivales en curación y refuerza su perfil veneno/tierra inmune al veneno y a la parálisis eléctrica. La combinación de habilidad y bulk lo hace ideal para entrar ante acuáticos y rotar colocando una trampa por turno. Terremoto da una STAB de castigo constante sin depender del daño pasivo. Naturaleza Cauta maximiza la Defensa Especial, el lado que cubre gracias a los 100 base frente a los 60 de Defensa física; Defensa 60 se compensa con PS 130. La Velocidad 20, la más baja del rango, lo hace perfecto para Espacio Raro y para moverse tras casi cualquier rival.',
      alternatives: [
        {
          slot: 'ability',
          value: 'UNAWARE',
          note: 'Ignorante anula los boosts del rival al atacar, frenando a los sweepers, a cambio de perder la curación de agua de Absorbe Agua.'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Plancha Corporal aprovecha la Defensa para golpear sin invertir en Ataque, cediendo la cobertura de tierra de Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga a los atacantes de contacto con la gran mejoría de HP, a cambio de la recuperación de Restos.'
        }
      ]
    }
  ]
}

export default clodsire