import type { PokemonTemplateSet } from '../../lib/types'

const tinglu: PokemonTemplateSet = {
  internalName: 'TINGLU',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'VESSELOFRUIN',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 0, 4],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'SPIKES', 'EARTHQUAKE', 'HEAVYSLAM'],
      justification:
        'Ting-Lu es el equivalente físico de los debacles de Añil: Caldero Debacle reduce el Ataque Especial de todos los demás, y con PS 155, Defensa 125 y Velocidad 45 su rol es exclusivamente de muro y colocador de trampas. Trampa Rocas y Púas dan las dos capas de desgaste por entrada, aprovechando que la baja Velocidad le resta relevancia ofensiva y le regala el turno defensivo para colocarlas. Terremoto (100, STAB) y Cuerpo Pesado (peso alto contra rivales más ligeros) son el daño de salida y de castigo. El reparto 252 PS / 252 Def con Agitada apuntala la estadística que sostiene el tipo Siniestro/Tierra, mientras la Defensa Especial baja (80) queda cubierta por el propio Caldero Debacle, que reduce el Ataque Especial rival. Restos aportan la recuperación que su repertorio legal no tiene; el rápido descuento de PS maximiza la supervivencia del muro.',
      alternatives: [
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga a los atacantes físicos de contacto con el daño pasivo, a cambio de la recuperación gradual de Restos.'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Chaleco Asalto multiplica la Defensa Especial efectiva ya reducida por Caldero Debacle, a costa de perder las trampas por no poder usar estados.'
        },
        {
          slot: 'move',
          value: 'WHIRLWIND',
          note: 'Torbellino frenta el setup rival y redistribuye los Pokémon en el campo, a cambio de Cuerpo Pesado como golpe de castigo.',
          replaces: 'HEAVYSLAM'
        }
      ]
    }
  ]
}

export default tinglu
