import type { PokemonTemplateSet } from '../../lib/types'

const meganium: PokemonTemplateSet = {
  internalName: 'MEGANIUM',
  templates: [
    {
      role: 'cleric',
      isPrimary: true,
      confidence: 'viable',
      ability: 'TRIAGE',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['GIGADRAIN', 'DRAININGKISS', 'SYNTHESIS', 'AROMATHERAPY'],
      justification:
        'En Añil V4.13 Meganium es Planta/Hada con Primer Auxilio como habilidad oculta, y esa combinación define el set. Primer Auxilio sube en 3 la prioridad de los movimientos que curan PS directamente: Fotosíntesis pasa a recuperarse antes que casi todo, y Gigadrenado y Beso Drenaje se vuelven STAB prioritarios que además curan. Con PS 80 y defensas 100/100 más naturaleza Serena y reparto especial defensivo, Meganium gana casi cualquier guerra de desgaste y sostiene al equipo con Aromaterapia, que limpia estados de todo el grupo. El tipo aporta inmunidad a Dragón y resistencias a Agua, Eléctrico, Planta, Lucha y Siniestro, aunque hay que contar con la debilidad x4 a Veneno y x2 a Fuego, Hielo, Volador y Acero. Restos añaden recuperación pasiva mientras se reservan los turnos de curación activa.',
      alternatives: [
        {
          slot: 'move',
          value: 'ENCORE',
          note: 'Bloquea al rival en un movimiento de mejora o de estado y abre turno para el equipo, a cambio de la limpieza de estados de Aromaterapia.',
          replaces: 'AROMATHERAPY'
        },
        {
          slot: 'move',
          value: 'LEECHSEED',
          note: 'Drenadoras añade daño residual y recuperación pasiva; las dos absorciones prioritarias siguen cubriendo la cura activa sin Fotosíntesis.',
          replaces: 'SYNTHESIS'
        },
        {
          slot: 'move',
          value: 'MOONBLAST',
          note: 'Fuerza Lunar da presión ofensiva real de tipo Hada y baja el At. Esp. rival, útil contra equipos que ignoran a un Meganium sin ataque.',
          replaces: 'AROMATHERAPY'
        }
      ]
    },
    {
      role: 'tank',
      isPrimary: false,
      confidence: 'viable',
      ability: 'TRIAGE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['GIGADRAIN', 'DRAININGKISS', 'BODYPRESS', 'SYNTHESIS'],
      justification:
        'Variante física defensiva que aprovecha la Defensa 100 con Plancha Corporal, que calcula el daño con la Defensa del usuario y golpea de lleno a los Acero que amenazan al tipo Planta/Hada. Primer Auxilio mantiene la prioridad en Gigadrenado, Beso Drenaje y Fotosíntesis, de modo que Meganium se cura antes de recibir el siguiente golpe y devuelve daño constante con las dos absorciones STAB. Naturaleza Osada y reparto 252 PS / 252 Def para aguantar a los físicos, con Restos para el desgaste largo. Es un tanque de partida completa más que un muro pasivo: presiona con las absorciones mientras se sostiene con recuperación prioritaria.',
      alternatives: [
        {
          slot: 'move',
          value: 'LEECHSEED',
          note: 'Cambia la ofensiva de Plancha Corporal por daño residual continuo, mejor contra equipos sin Acero relevante.',
          replaces: 'BODYPRESS'
        },
        {
          slot: 'move',
          value: 'EARTHPOWER',
          note: 'Tierra Viva castiga a Veneno, Acero y Fuego rivales por el lado especial, cobertura alternativa a Plancha Corporal.',
          replaces: 'BODYPRESS'
        },
        {
          slot: 'nature',
          value: 'CALM',
          note: 'Reorientar la inversión a la Def. Esp. con reparto especial defensivo si el equipo necesita frenar cargas especiales en vez de físicas.'
        }
      ]
    }
  ]
}

export default meganium
