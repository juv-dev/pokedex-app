import type { PokemonTemplateSet } from '../../lib/types'

const omastar: PokemonTemplateSet = {
  internalName: 'OMASTAR',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHELLARMOR',
      item: 'WHITEHERB',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHELLSMASH', 'HYDROPUMP', 'EARTHPOWER', 'ICEBEAM'],
      justification:
        'Omastar en Añil V4.13 tiene At. Esp. 115, Defensa 125 y Velocidad 55. Rompecoraza sube dos niveles At. Esp., Velocidad y también la Def. Esp. y la Defensa se bajan, pero Hierba Blanca restaura de inmediato esas caídas, dejando a Omastar con potencia y Velocidad de barredor de golpe. Hidrobomba es el STAB principal, Tierra Viva castiga a los Roca, Acero, Eléctrico y Veneno que resisten Agua, y Rayo Hielo cubre a Planta, Dragón, Tierra y Volador. Caparazón anula los golpes críticos, que de otro modo podrían cortar la instalación pese al objeto. La Defensa 125 base también facilita encontrar el turno para instalar. Naturaleza Modesta y reparto ofensivo completo.',
      alternatives: [
        {
          slot: 'item',
          value: 'WEAKNESSPOLICY',
          note: 'Válvula Escape convierte un golpe supereficaz recibido durante o después de Rompecoraza en dos niveles extra de ataque, a cambio de no anular las bajadas defensivas.'
        },
        {
          slot: 'ability',
          value: 'SWIFTSWIM',
          note: 'Nado Rápido dobla la Velocidad bajo lluvia; en equipos de lluvia Omastar puede prescindir de la Velocidad de Rompecoraza y usar el turno para más daño o trampas.'
        },
        {
          slot: 'move',
          value: 'METEORBEAM',
          note: 'Meteorayo (130, Roca) sube el At. Esp. al cargar y aporta STAB Roca contra Volador y Fuego, a cambio de un turno de carga.',
          replaces: 'ICEBEAM'
        }
      ]
    },
    {
      role: 'hazard-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SHELLARMOR',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'SPIKES', 'SCALD', 'EARTHPOWER'],
      justification:
        'Con Defensa 125 y PS 70, Omastar sirve como colocador de trampas resistente por el lado físico: tiene acceso tanto a Trampa Rocas como a Púas, lo que le permite apilar entradas peligrosas a lo largo de la partida. Escaldar mantiene una fuente de daño con quemadura contra los físicos que intenten aprovecharse de él, y Tierra Viva pega a los Acero y Eléctrico que suelen entrar a frenar trampas. Caparazón lo protege de críticos mientras cumple su labor de apoyo. Es un uso secundario coherente cuando el equipo ya tiene otra vía de barrido.',
      alternatives: [
        {
          slot: 'move',
          value: 'TOXICSPIKES',
          note: 'Púas Tóxicas envenenan a los que entran a ras de suelo, alternativa a Púas según lo que necesite el plan de desgaste.',
          replaces: 'SPIKES'
        }
      ]
    }
  ]
}

export default omastar
