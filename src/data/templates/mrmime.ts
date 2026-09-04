import type { PokemonTemplateSet } from '../../lib/types'

const mrmime: PokemonTemplateSet = {
  internalName: 'MRMIME',
  templates: [
    {
      role: 'screens-setter',
      isPrimary: true,
      confidence: 'viable',
      ability: 'FILTER',
      item: 'LIGHTCLAY',
      nature: 'TIMID',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['REFLECT', 'LIGHTSCREEN', 'DAZZLINGGLEAM', 'HEALINGWISH'],
      justification:
        'Mr. Mime en Añil V4.13 es tipo Psíquico/Hada con At. Esp. 100 y Velocidad 90, pero muy frágil por el lado físico (PS 50 / Def 65). Filtro reduce a 3/4 el daño de los movimientos supereficaces, lo que le da margen para sobrevivir a un golpe y llegar a colocar las dos pantallas. Reflejo y Pantalla de Luz con Refleluz duran ocho turnos y reducen a la mitad el daño físico y especial de todo el equipo. Su tipo Hada le da una resistencia natural a los golpes de prioridad de tipo Siniestro y Bicho que suelen castigar a los colocadores de pantallas. Deseo Cura sacrifica a Mr. Mime cuando ya cumplió para entregar a un compañero con los PS y los estados restaurados, sinergia directa con un barredor que quiera entrar tras las pantallas. Brillo Mágico evita ser presa pasiva de Mofa. Miedosa y máxima Velocidad para colocar antes de recibir.',
      alternatives: [
        {
          slot: 'ability',
          value: 'PSYCHICSURGE',
          note: 'Psicogénesis crea un campo psíquico al entrar que bloquea la prioridad y potencia los movimientos psíquicos; con Maquinación, Vasta Fuerza y cobertura pasa a ser atacante especial de campo, otra línea de uso distinta a las pantallas.'
        },
        {
          slot: 'move',
          value: 'ENCORE',
          note: 'Bis bloquea al rival en su último movimiento y le regala turnos al equipo para preparar, cediendo el apoyo de Deseo Cura.',
          replaces: 'HEALINGWISH'
        },
        {
          slot: 'move',
          value: 'FOCUSBLAST',
          note: 'Onda Certera castiga a Acero y Siniestro que entran a bloquear Brillo Mágico, a cambio de fiabilidad de precisión.',
          replaces: 'DAZZLINGGLEAM'
        }
      ]
    }
  ]
}

export default mrmime
