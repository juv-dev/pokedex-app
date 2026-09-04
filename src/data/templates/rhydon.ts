import type { PokemonTemplateSet } from '../../lib/types'

const rhydon: PokemonTemplateSet = {
  internalName: 'RHYDON',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LIGHTNINGROD',
      item: 'EVIOLITE',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'EARTHQUAKE', 'STONEEDGE', 'ROAR'],
      justification:
        'Rhydon todavía evoluciona a Rhyperior, así que puede llevar Mineral Evolutivo, que sube su Defensa y su Defensa Especial un 50%. Con PS 105 y Defensa 120 de base, esa subida lo lleva a una Defensa efectiva enorme y compensa parcialmente su Def. Esp. 45, su punto flojo. El tipo Tierra ya lo hace inmune a Eléctrico, y Pararrayos añade que suba el At. Esp. si le lanzan un ataque de ese tipo y redirige en dobles. Trampa Rocas aprovecha su volumen para colocar la trampa varias veces por partida; Terremoto y Roca Afilada son la combinación de tipos de referencia, que juntos no tienen casi resistencias; Rugido saca al rival que intenta montar setup encima suyo y lo obliga a comerse las trampas al reentrar. Agitada y máximo reparto en PS y Defensa: con el Mineral, el flanco físico se vuelve casi impenetrable y el Ataque 130 sigue doliendo sin inversión.',
      alternatives: [
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Plancha Corporal usa la Defensa (ya disparada por el Mineral) como Ataque y castiga a Acero y Hielo, cediendo la cobertura de Volador y Bicho de Roca Afilada.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'MEGAHORN',
          note: 'Megacuerno pega fuerte a Psíquico, Planta y Siniestro que entran sin miedo al STAB de Tierra y Roca, a cambio del control de fase de Rugido.',
          replaces: 'ROAR'
        },
        {
          slot: 'nature',
          value: 'CAREFUL',
          note: 'Cauta con reparto en Def. Esp. parchea el flanco especial, que sigue siendo el hueco aun con el Mineral, dejando la Defensa física a su valor natural ya muy alto.'
        }
      ]
    }
  ]
}

export default rhydon
