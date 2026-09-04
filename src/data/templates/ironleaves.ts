import type { PokemonTemplateSet } from '../../lib/types'

const ironleaves: PokemonTemplateSet = {
  internalName: 'IRONLEAVES',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'QUARKDRIVE',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['ELECTRICTERRAIN', 'PSYBLADE', 'LEAFBLADE', 'SACREDSWORD'],
      justification:
        'Iron Leaves auna Ataque 130 y Velocidad 104 sobre el tipo Planta/Psíquico. Campo Eléctrico es el núcleo del set: activa Carga Cuark (que sube su Ataque), potencia su firma Psicohojas (80, que pasa a pegar más fuerte bajo el campo) y deja cubierto un elemento de disruptión frente a sueño y estados. Hoja Aguda (90, STAB Planta) y Espada Santa (90, ignora subidas de Defensa del rival) completan la cobertura física. Naturaleza Firme y reparto en Ataque y Velocidad: sin Danza de velocidad externa, Firme maximiza la salida física por turno. Restos sostienen el campo contrario pese a la Defensa 88; el set no necesita un objeto ofensivo porque el terreno ya le concede el impulso de Carga Cuark.',
      alternatives: [
        {
          slot: 'item',
          value: 'BOOSTERENERGY',
          note: 'Energía Potenciadora garantiza el impulso de Carga Cuark sin gastar un turno en Campo Eléctrico, liberando el slot para otro ataque.'
        },
        {
          slot: 'move',
          value: 'MEGAHORN',
          note: 'Megacuerno da cobertura contra Siniestro y Psíquico, a cambio de la fiabilidad anti-setup de Espada Santa.',
          replaces: 'SACREDSWORD'
        }
      ]
    }
  ]
}

export default ironleaves
