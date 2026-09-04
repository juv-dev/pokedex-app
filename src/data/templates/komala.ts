import type { PokemonTemplateSet } from '../../lib/types'

const komala: PokemonTemplateSet = {
  internalName: 'KOMALA',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'COMATOSE',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BODYSLAM', 'PLAYROUGH', 'EARTHQUAKE', 'KNOCKOFF'],
      justification:
        'Letargo Perenne hace a Komala inmune a todos los problemas de estado: ni quemadura, ni parálisis, ni veneno, ni sueño, de modo que el Ataque 115 y la Velocidad 65 se mantienen íntegros toda la partida y ningún estado cripple le reduce la producción de daño. Eso convierte a un reparto voluminoso (PS 75 / Def. Esp. 95) en un atacante de desgaste: Restos recuperan entre golpes y Komala entra varias veces sin necesidad de apoyo. Golpe Cuerpo es el STAB Normal de 85 con 30% de parálisis, Carantoña (90) cubre a Siniestro, Dragón y Lucha, Terremoto golpea a Acero, Roca, Fuego, Veneno y Eléctrico, y Desarme retira objetos. Fachada queda descartada a propósito: su doble de potencia exige estar quemado, paralizado o envenenado, estados que la propia habilidad impide. Naturaleza Firme y reparto en PS y Ataque; la Velocidad 65 no admite inversión competitiva.',
      alternatives: [
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Danza Espada convierte el set en rompemuros golpeando a +2, cediendo la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'DOUBLEEDGE',
          note: 'Doble Filo sube el STAB a 120 con retroceso de un tercio, que Restos compensan parcialmente.',
          replaces: 'BODYSLAM'
        },
        {
          slot: 'move',
          value: 'SUCKERPUNCH',
          note: 'Golpe Bajo con prioridad +1 remata amenazas rápidas y frágiles, cediendo Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'RAPIDSPIN',
          note: 'Giro Rápido retira las trampas propias al entrar, cediendo la cobertura de Carantoña.',
          replaces: 'PLAYROUGH'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'COMATOSE',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'DOUBLEEDGE', 'PLAYROUGH', 'EARTHQUAKE'],
      justification:
        'Variante de rompemuros: Danza Espada lleva el Ataque 115 a +2 y Doble Filo (120) se convierte en un STAB enorme con retroceso. La ventaja competitiva está en Letargo Perenne: Komala puede bailar sin riesgo de que le quemen o paralicen en el turno de mejora, algo que un rompemuros normal no puede garantizar, y conserva su Velocidad intacta para los golpes posteriores. Carantoña y Terremoto mantienen la cobertura contra Siniestro, Acero y Roca. Es viable y no óptimo como rol primario porque la Velocidad 65 no alcanza para barrer: Komala rompe un muro, pero depende del equipo para cerrar, y Doble Filo desgasta los PS 75 con cada golpe.',
      alternatives: [
        {
          slot: 'move',
          value: 'BODYSLAM',
          note: 'Golpe Cuerpo sacrifica 35 de potencia por la parálisis (30%) y cero retroceso.',
          replaces: 'DOUBLEEDGE'
        },
        {
          slot: 'move',
          value: 'SUPERFANG',
          note: 'Superdiente parte a la mitad los PS de un muro antes de la danza, cediendo la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        }
      ]
    }
  ]
}

export default komala