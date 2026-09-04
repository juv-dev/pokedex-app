import type { PokemonTemplateSet } from '../../lib/types'

const parasect: PokemonTemplateSet = {
  internalName: 'PARASECT',
  templates: [
    {
      role: 'status-spreader',
      isPrimary: true,
      confidence: 'viable',
      ability: 'EFFECTSPORE',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPORE', 'KNOCKOFF', 'SEEDBOMB', 'XSCISSOR'],
      justification:
        'Parasect en Añil V4.13 tiene Ataque 100 y un volumen aceptable de PS 95 / Def 80 / Def.Esp 90, con Velocidad 30. Su nicho es el de lead que desactiva un rival: Espora ("esparce esporas que inducen al sueño", 100 de precisión) es la inducción de sueño más fiable del juego, y aunque la Velocidad 30 hace que casi siempre golpee después de recibir un ataque, el volumen le permite aguantar el primer golpe y dormir igual. Desarme quita el objeto al que entra, Bola Semilla y Tijera X son el doble STAB físico. Efecto Espora ("30% de dormir, envenenar o paralizar al hacer contacto al recibir un ataque") añade castigo pasivo a todo el que lo golpee de contacto, encadenando con el propio sueño de Espora. Es "viable" y no "óptimo" porque el tipo Bicho/Planta arrastra una debilidad 4x a Fuego y otra a Vuelo, Roca y Hielo, y la Velocidad 30 lo deja indefenso ante cualquier atacante especial que no se pueda dormir a tiempo.',
      alternatives: [
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Danza Espada aprovecha un rival dormido para montar y convierte a Parasect en amenaza ofensiva en equipos de Espacio Raro, a cambio de la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'LEECHLIFE',
          note: 'Chupavidas (80, tipo Bicho, cura la mitad del daño) da recuperación y compensa la falta de longevidad, cediendo la cobertura neutra de Tijera X.',
          replaces: 'XSCISSOR'
        },
        {
          slot: 'nature',
          value: 'BRAVE',
          note: 'Audaz con 0 IV de Velocidad si el equipo es de Espacio Raro: bajo ese campo la Velocidad 30 pasa a ser una ventaja.'
        }
      ]
    }
  ]
}

export default parasect
