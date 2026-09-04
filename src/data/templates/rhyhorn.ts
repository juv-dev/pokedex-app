import type { PokemonTemplateSet } from '../../lib/types'

const rhyhorn: PokemonTemplateSet = {
  internalName: 'RHYHORN',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LIGHTNINGROD',
      item: 'SUPEREVIOLITE',
      nature: 'IMPISH',
      evs: [252, 4, 252, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'EARTHQUAKE', 'STONEEDGE', 'MEGAHORN'],
      justification:
        'Rhyhorn es el único caso real de Supermin. Evol. en este tramo: el objeto de Añil que aumenta un 50% todas las estadísticas cuando el Pokémon puede evolucionar dos veces y le impide evolucionar, y la línea Rhyhorn-Rhydon-Rhyperior cumple la condición. Con él queda en PS 120 y Defensa 142 efectivas, más voluminoso en el lado físico que Rhydon (105/120) y Rhyperior (115/130), que ya no pueden portarlo, sin perder la Trampa Rocas ni la cobertura de la línea. Pararrayos anula los movimientos eléctricos, y sumado a las resistencias naturales de Tierra/Roca ante Normal, Fuego, Volador y Veneno le da entradas limpias contra atacantes físicos comunes. Megacuerno (120) cubre el hueco de la doble STAB Tierra/Roca, que pierde contra Planta: la golpea supereficaz y pega neutro a los aceros tipo Ferrothorn, mientras Terremoto y Roca Afilada castigan al resto. Agitada con 252 PS y 252 Defensa porque la Defensa Especial 45 no se rescata con inversión y el set es íntegramente físico. Supermin. Evol. supera a Mineral Evolutivo en este caso porque el aumento completo deja a Rhyhorn con mejor bulto general que la alternativa de solo defensas.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROCKBLAST',
          note: 'Pedrada golpea dos a cinco veces, rompe Banda Aguante y Robustez y elimina el riesgo de la precisión 80, a cambio de potencia bruta.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'ICEFANG',
          note: 'Colmillo Hielo (95) golpea a los Tierra/Volador como Gliscor que la cobertura Tierra/Roca no alcanza, cediendo el castigo limpio a Planta.',
          replaces: 'MEGAHORN'
        },
        {
          slot: 'ability',
          value: 'ROCKHEAD',
          note: 'Cabeza Roca habilita un set con Doble Filo (120) sin retroceso si se prefiere daño bruto sobre la inmunidad eléctrica de Pararrayos.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'LIGHTNINGROD',
      item: 'SUPEREVIOLITE',
      nature: 'BRAVE',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['SWORDSDANCE', 'EARTHQUAKE', 'STONEEDGE', 'MEGAHORN'],
      justification:
        'Variante de Espacio Raro: con la Velocidad base 25 y el IV a 0, Rhyhorn ataca primero dentro de la ventana, y Supermin. Evol. le da el volumen para sobrevivir los turnos de setup en vez de morir en ellos. Danza Espada lleva su Ataque efectivo 127 a +2, y la misma cobertura del set principal —Terremoto, Roca Afilada, Megacuerno— no deja huecos: Planta la cubre Megacuerno y Acero aguanta neutro como máximo. La naturaleza Audaz (Brave) con IV de Velocidad 0 maximiza el orden de acción bajo Espacio Raro, y Pararrayos conserva la inmunidad eléctrica aunque el rival también vaya lento. Es viable y no óptimo porque depende del soporte de Espacio Raro del equipo y la Defensa Especial 45 sigue siendo un flanco vulnerable frente a cualquier atacante especial.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROCKBLAST',
          note: 'Pedrada rompe Banda Aguante y Robustez en un entorno lento, cediendo el pico de Roca Afilada.',
          replaces: 'STONEEDGE'
        }
      ]
    }
  ]
}

export default rhyhorn