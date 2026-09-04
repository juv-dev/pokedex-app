import type { PokemonTemplateSet } from '../../lib/types'

const hatterene: PokemonTemplateSet = {
  internalName: 'HATTERENE',
  templates: [
    {
      role: 'trick-room-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MAGICBOUNCE',
      item: 'LEFTOVERS',
      nature: 'QUIET',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['TRICKROOM', 'PSYCHIC', 'DAZZLINGGLEAM', 'MYSTICALFIRE'],
      justification:
        'Hatterene es el colocador de Espacio Raro ideal por su Velocidad base 29: gracias a la naturaleza Mansa y al IV de Velocidad a 0, es de lo más lento del metajuego y, una vez activado Espacio Raro, ataca primero. Espejo Mágico (oculta) devuelve los ataques de estado del rival, lo que lo protege de Tóxico, Mofa y Trampa Rocas al entrar y le garantiza colocar el Espacio Raro sin contratiempos. Con Ataque Esp. 136, después de activarlo amenaza seriamente: Psíquico es la STAB Psíquica, Brillo Mágico la STAB Hada que pega de forma supereficaz a Siniestro y Acero (los que resisten a Psíquico), y Llama Embrujada aporta cobertura Fuego y baja el At. Esp. del rival. Reparto 252 PS / 252 At. Esp. con Restos para aguantar el intercambio mientras sostiene el Espacio Raro del equipo; su Def. Esp. 103 y Defensa 95 le permiten vivir el turno de activación.',
      alternatives: [
        {
          slot: 'move',
          value: 'RECOVER',
          note: 'Recuperación restaura la mitad de los PS y da longevidad como plataforma de Espacio Raro, a cambio de la cobertura Fuego de Llama Embrujada.',
          replaces: 'MYSTICALFIRE'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante garantiza el turno de activación de Espacio Raro incluso frente a un KO, cediendo la curación pasiva de Restos.',
          replaces: 'LEFTOVERS'
        }
      ]
    }
  ]
}

export default hatterene
