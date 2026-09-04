import type { PokemonTemplateSet } from '../../lib/types'

const bellossom: PokemonTemplateSet = {
  internalName: 'BELLOSSOM',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'viable',
      ability: 'CHLOROPHYLL',
      item: 'LEFTOVERS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['QUIVERDANCE', 'GIGADRAIN', 'MOONBLAST', 'STRENGTHSAP'],
      justification:
        'Bellossom tiene un volumen notable para un tipo Planta puro (75/85/100/100) y acceso a Danza Aleteo, que sube de golpe Ataque Especial, Defensa Especial y Velocidad. Con Clorofila y sol de un compañero su Velocidad se duplica y pasa a barrer de verdad; sin sol sigue siendo un wincon voluminoso que instala con seguridad. Gigadrenado es STAB con recuperación, Voz Lunar añade cobertura Hada que pega a Siniestro, Lucha y Dragón, y Absorbe Fuerza cura en función del Ataque rival y además lo baja, alargando cada intento de setup. Restos sostiene el ciclo. Naturaleza Modesta con inversión en PS y Ataque Especial porque la Velocidad la resuelven Danza Aleteo y la habilidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'SLUDGEBOMB',
          note: 'Bomba Lodo castiga a otros Planta y a las Hadas que quieren pararla, a cambio de la longevidad de Absorbe Fuerza.',
          replaces: 'STRENGTHSAP'
        },
        {
          slot: 'move',
          value: 'SYNTHESIS',
          note: 'Síntesis da recuperación instantánea mayor bajo sol, útil si el equipo ya presiona a los muros de acero.',
          replaces: 'STRENGTHSAP'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas Gruesas si el equipo carece de control de trampas y Bellossom debe entrar varias veces antes de instalar.'
        }
      ]
    }
  ]
}

export default bellossom
