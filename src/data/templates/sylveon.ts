import type { PokemonTemplateSet } from '../../lib/types'

const sylveon: PokemonTemplateSet = {
  internalName: 'SYLVEON',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PIXILATE',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['HYPERVOICE', 'MYSTICALFIRE', 'PSYSHOCK', 'SHADOWBALL'],
      justification:
        'At.Esp 110 y Def.Esp 130 sobre 95 de PS, con solo 60 de Velocidad: un rompemuros especial que también aguanta el lado especial. Piel Feérica convierte Vozarrón en tipo Hada y le suma un 20% de potencia, dejando un STAB de sonido de 90 base que ignora Sustituto y no necesita apuntar: es el ataque principal y casi siempre la respuesta correcta. Gafas Elección multiplica ese daño hasta niveles que rompen muros neutrales. Fuego Místico pega a los Acero que resisten Hada y de paso baja su At.Esp; Psicocarga golpea por el lado físico a los Veneno y a muros especiales como Blissey; Bola Sombra cubre el espejo contra otros Sylveon y a los Psíquico y Fantasma. Modesta porque la Velocidad no se puede arreglar; IV de Ataque a 0 para minimizar Bola Fija y confusión.',
      alternatives: [
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Convierte a Sylveon en un muro especial ofensivo: pierde el multiplicador de Gafas pero se vuelve casi impenetrable por el lado especial.'
        },
        {
          slot: 'move',
          value: 'PSYCHIC',
          note: 'Más potencia bruta que Psicocarga contra Veneno si el equipo no necesita romper muros de Def.Esp.',
          replaces: 'PSYSHOCK'
        }
      ]
    },
    {
      role: 'wall-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PIXILATE',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['HYPERVOICE', 'MYSTICALFIRE', 'DRAININGKISS', 'HEALBELL'],
      justification:
        'Def.Esp 130 y PS 95 hacen de Sylveon un muro especial natural, y sin acceso a Deseo pierde su rol clásico de repartir PS pero conserva utilidad real: Alivio cura los estados alterados de todo el equipo y Beso Drenaje le devuelve el 75% del daño infligido como recuperación propia. Vozarrón potenciado por Piel Feérica mantiene una amenaza ofensiva constante para no ser pasivo del todo, y Fuego Místico impide que los Acero entren gratis. Restos cubre el desgaste pasivo. Es viable y no óptimo porque la ausencia de recuperación instantánea fiable y los 60 de Velocidad limitan cuánto puede repetir el ciclo defensivo.',
      alternatives: [
        {
          slot: 'move',
          value: 'CALMMIND',
          note: 'Convierte el muro en una amenaza de fin de partida acumulando At.Esp y Def.Esp, a cambio de la utilidad de Alivio para el equipo.',
          replaces: 'HEALBELL'
        }
      ]
    }
  ]
}

export default sylveon
