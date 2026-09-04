import type { PokemonTemplateSet } from '../../lib/types'

const audino: PokemonTemplateSet = {
  internalName: 'AUDINO',
  templates: [
    {
      role: 'cleric',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'REGENERATOR',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['WISH', 'HEALBELL', 'KNOCKOFF', 'DAZZLINGGLEAM'],
      justification:
        'Sin Mega Evolución en Añil, Audino queda con 80 de PS y 86/86 de defensas, un cuerpo modesto que solo cunde como apoyo. Su segunda habilidad, Regeneración, le devuelve un tercio de los PS cada vez que vuelve a la Poké Ball, lo que le da recuperación real sin gastar turno y encaja con un rol de pivote clérigo. Deseo cura a la mitad del equipo con un turno de retraso y también se restaura a sí mismo; Campana Salud limpia los estados alterados de todo el equipo, función que las heurísticas no suelen priorizar. Desarme quita el objeto rival y evita ser presa fácil de Mofa, y Destello Feérico castiga a los Siniestro que entran a bloquear Desarme. El reparto a PS y Defensa Especial con naturaleza Serena y 0 IV en Ataque lo orienta a frenar atacantes especiales y a minimizar Juego Sucio. Restos suma otra fuente de recuperación pasiva para sostener el ciclo de cambios.',
      alternatives: [
        {
          slot: 'ability',
          value: 'TRIAGE',
          note: 'Da prioridad +3 a Beso Drenaje para curarse antes de caer; funciona mejor con un set ofensivo de Paz Mental.'
        },
        {
          slot: 'move',
          value: 'LIFEDEW',
          note: 'Cura instantánea al usuario y aliados sin el turno de retraso de Deseo, a costa de no pasar la cura a un relevo.',
          replaces: 'WISH'
        },
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Añade una vía de desgaste contra muros rivales si el equipo no necesita el golpe a Siniestro.',
          replaces: 'DAZZLINGGLEAM'
        }
      ]
    }
  ]
}

export default audino
