import type { PokemonTemplateSet } from '../../lib/types'

const archaludon: PokemonTemplateSet = {
  internalName: 'ARCHALUDON',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STAMINA',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 4, 252, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BODYPRESS', 'IRONDEFENSE', 'EARTHQUAKE', 'STEALTHROCK'],
      justification:
        'Archaludon en Añil tiene Defensa 130 y la habilidad Firmeza, que sube su Defensa un nivel por cada ataque directo que recibe sobre el Acero/Dragón. Eso convierte su cuerpo en la fuente de la estrategia: Firmeza y Defensa de Hierro (+2 Defensa) alimentan a Plancha Corporal (80, que usa la Defensa en vez del Ataque), de modo que cuanto más lo golpean y más se fortifica, más duro castiga. Terremoto (100) cubre a los Acero y Eléctrico que resisten al Dragón, y Trampa Rocas lo vuelve un colocador de trampas mientras tanquea. Naturaleza Agitada y reparto en PS y Defensa maximizan justo la estadística que Firmeza y Plancha Corporal multiplican; la Velocidad 85 se ignora porque el rol es absorber y responder. Restos sostienen la recuperación que su repertorio no incluye.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRACOMETEOR',
          note: 'Cometa Draco aprovecha su Ataque Especial 125 como salida especial de un tanque mixto, a cambio de perder una capa de fortificación.',
          replaces: 'IRONDEFENSE'
        },
        {
          slot: 'ability',
          value: 'STURDY',
          note: 'Robustez garantiza sobrevivir a un golpe mortal con PS al máximo, ideal si se prioriza colocar Trampa Rocas por encima de acumular Defensa.'
        }
      ]
    }
  ]
}

export default archaludon
