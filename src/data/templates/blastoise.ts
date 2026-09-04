import type { PokemonTemplateSet } from '../../lib/types'

const blastoise: PokemonTemplateSet = {
  internalName: 'BLASTOISE',
  templates: [
    {
      role: 'hazard-removal',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TORRENT',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RAPIDSPIN', 'SCALD', 'ICEBEAM', 'FLIPTURN'],
      justification:
        'El perfil de Añil V4.13 es PS 79 / Def 100 / Def.Esp 105 con Velocidad 78: un Agua puro voluminoso cuya debilidad solo es Planta y Eléctrico, ideal para el rol de limpiador de trampas. Giro Rápido (50, además "elimina las trampas de entrada y libera al usuario de vínculos") quita Trampa Rocas, Púas y Púas Tóxicas del propio campo y de paso sube la Velocidad en Añil. Escaldar (80, STAB, 30% de quemar) es el arma defensiva estándar: castiga a los físicos que Blastoise quiere pared. Rayo Hielo cubre a los Planta, Dragón y Volador que entran contra el Agua. Vuelta Rápida mantiene el momentum y ofrece una segunda vía de retirada de trampas ligada a un cambio. Restos aporta la recuperación que el repertorio no da de forma fiable (no tiene Recuperación ni Síntesis). El reparto 252 PS / 252 Def con Osada apunta al lado físico, que es lo que un spinner necesita aguantar para volver a girar turno tras turno; Torrenta queda como red de seguridad de un solo pico bajo 1/3 de PS.',
      alternatives: [
        {
          slot: 'move',
          value: 'HAZE',
          note: 'Niebla ("elimina los cambios de características de todos los Pokémon") frena a un setup sweeper que intente usar a Blastoise de entrada gratis.',
          replaces: 'FLIPTURN'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Sofocón usa la Defensa 100 como Ataque y castiga a los tipos Acero y Normal que ignoran a Escaldar.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado aprovecha la Defensa 100 para restar 1/6 de PS a cada atacante físico de contacto; se cambia longevidad por presión pasiva.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'TORRENT',
      item: 'WHITEHERB',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHELLSMASH', 'HYDROPUMP', 'ICEBEAM', 'AURASPHERE'],
      justification:
        'Variante de cierre que explota la Def 100 / Def.Esp 105 para encontrar el turno de setup. Rompecoraza baja Defensa y Def.Esp. un nivel pero sube Ataque, At.Esp. y Velocidad dos niveles; Hierba Blanca ("restaura cualquier característica debilitada en combate", un solo uso) cancela de inmediato las bajadas defensivas, dejando a Blastoise en +2 puro. Tras el impulso, Hidrobomba (110, STAB) e Rayo Hielo cubren casi todo el reparto neutro, y Esfera Aural (80, precisión perfecta) rompe a Acero y Normal. Es "viable" y no "óptimo" porque Blastoise no tiene prioridad ni Velocidad base alta: si el rival conserva un revenge killer rápido o algo con prioridad, el barrido se corta pese al +2.',
      alternatives: [
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Miedosa asegura superar tras Rompecoraza a más objetivos con Pañuelo Elección y a naturalezas neutras del tramo alto, a cambio de potencia.'
        },
        {
          slot: 'move',
          value: 'FLASHCANNON',
          note: 'Foco Resplandor golpea limpio a Hada y Hielo enemigos que resisten Agua y aguantan Lucha.',
          replaces: 'AURASPHERE'
        }
      ]
    }
  ]
}

export default blastoise
