import type { PokemonTemplateSet } from '../../lib/types'

const hydrapple: PokemonTemplateSet = {
  internalName: 'HYDRAPPLE',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'REGENERATOR',
      item: 'LEFTOVERS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 0, 4],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CHLOROBLAST', 'DRAGONPULSE', 'GIGADRAIN', 'RECOVER'],
      justification:
        'Hydrapple de Añil tiene Ataque Especial 130, Defensa 110 y PS 106, con la velocidad más baja del formato (44) y Regeneración para recuperar 1/3 de PS al retirarse: un tipo Planta/Dragón muy voluminoso y con recuperación triple. Clorofiláser (150, STAB Planta) es su nuke con retroceso de la mitad de los PS, pero Gigadrenado cura el 50% del daño, Recuperación restaura la mitad de los PS y Regeneración lo alivia al cambiar, de modo que el retroceso queda absorbido por la red de sostenibilidad. Pulso Dragón es el STAB Dragón fiable sin bajada de estadísticas. Naturaleza Modesta y reparto en PS y At. Esp. para maximizar el daño por golpe de un Pokémon que no compite en velocidad; Restos suman la cuarta fuente de recuperación. Funciona como muro especial que castiga y se cura.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRACOMETEOR',
          note: 'Cometa Draco da el golpe Dragón de 130 para romper un muro, a cambio de la consistencia de Pulso Dragón.',
          replaces: 'DRAGONPULSE'
        },
        {
          slot: 'nature',
          value: 'QUIET',
          note: 'Para equipos de Espacio Raro: con la Naturaleza Mansa (At. Esp., baja Velocidad) y IV de Velocidad 0, Hydrapple ataca primero durante los cinco turnos.'
        }
      ]
    }
  ]
}

export default hydrapple
