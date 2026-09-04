import type { PokemonTemplateSet } from '../../lib/types'

const tentacruel: PokemonTemplateSet = {
  internalName: 'TENTACRUEL',
  templates: [
    {
      role: 'hazard-removal',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CLEARBODY',
      item: 'BLACKSLUDGE',
      nature: 'TIMID',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RAPIDSPIN', 'SCALD', 'TOXICSPIKES', 'KNOCKOFF'],
      justification:
        'Tentacruel es el arquetipo de retirador de trampas y muro especial: Def. Esp. 120, Velocidad 100 y el tipo Agua/Veneno, que además absorbe Púas Tóxicas al entrar por estar en el suelo y es inmune al envenenamiento. Giro Rápido elimina Trampa Rocas, Púas y Púas Tóxicas del propio campo; Escaldar es el STAB con 30% de quemadura que le permite molestar a los físicos; Púas Tóxicas aportan presión de desgaste sobre el equipo rival; Desarme quita objetos y evita que Tentacruel sea material de setup gratuito. Cuerpo Puro impide que le bajen las características por Intimidación, Red Viscosa o Bilis. Lodo Negro le da recuperación pasiva como tipo Veneno y castiga a quien intente robarle el objeto. Naturaleza Miedosa y reparto en PS y Velocidad: la Def. Esp. 120 base apenas necesita inversión, y la Velocidad 100 le permite girar antes de caer.',
      alternatives: [
        {
          slot: 'move',
          value: 'HAZE',
          note: 'Niebla frena en seco a los barredores con setup que de otro modo usarían a Tentacruel como cebo, cediendo el control de objetos.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo castiga a Planta, Dragón y Tierra que entran de cambio, para que Tentacruel no sea del todo pasivo.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'ability',
          value: 'LIQUIDOOZE',
          note: 'Viscosecreción invierte el drenaje: Gigadrenado, Beso Drenaje o Drenadoras hieren al rival en lugar de curarlo.'
        },
        {
          slot: 'ability',
          value: 'RAINDISH',
          note: 'En un equipo de lluvia, Cura Lluvia recupera 1/16 por turno y se suma a Lodo Negro para un retirador casi irrompible.'
        }
      ]
    }
  ]
}

export default tentacruel
