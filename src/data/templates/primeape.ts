import type { PokemonTemplateSet } from '../../lib/types'

const primeape: PokemonTemplateSet = {
  internalName: 'PRIMEAPE',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ACOMETIDA',
      item: 'CHOICEBAND',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CLOSECOMBAT', 'EARTHQUAKE', 'STONEEDGE', 'UTURN'],
      justification:
        'La clave es Acometida: en el primer turno que Primeape sale a combatir recibe un 50% extra de Velocidad y un 20% extra de Ataque, lo que con Velocidad base 105 y naturaleza Alegre lo deja por delante de casi todo el metajuego sin cinta durante ese turno, mientras Cinta Elección (x1,5 de Ataque) convierte ese primer golpe en un pico de daño enorme junto a su Ataque base 115. A Bocajarro es la STAB física de 120 de potencia; Terremoto y Roca Afilada completan la cobertura de Lucha/Tierra/Roca que deja pocas resistencias en común, e Ida y Vuelta cede el turno tras el golpe para que un compañero aproveche el momentum sin quedar bloqueado por la Cinta. Naturaleza Alegre y reparto 252 At. / 252 Vel. maximizan el perfil de barredor: la subida de Acometida dura un solo turno, así que la inversión en Velocidad evita quedar rezagado frente al tramo de base 110 cuando el bono se apaga.',
      alternatives: [
        {
          slot: 'move',
          value: 'GUNKSHOT',
          note: 'Lanzamugre (120, tipo Veneno) pega limpio a las Hada y a los muros de Planta que resisten Lucha, cediendo el golpe a Fuego y Volador de Roca Afilada.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'RAGEFIST',
          note: 'Puño Furia (tipo Fantasma) gana potencia cada vez que Primeape recibe un golpe y golpea a Fantasma y Psíquico por neutro, a costa del golpe de Roca.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme quita el objeto rival y castiga a los cambios cuando el equipo prefiere no ceder el turno con Ida y Vuelta.',
          replaces: 'UTURN'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'DEFIANT',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CLOSECOMBAT', 'KNOCKOFF', 'EARTHQUAKE', 'RAGEFIST'],
      justification:
        'Variante de rompemuros con Competitivo: cada vez que el rival baja una característica de Primeape (por Intimidación, Viento Hielo, Disparo Lodo o Tela Viscosa), el Ataque sube dos niveles, transformando la entrada contra usuarios de bajar características en una ventaja ofensiva. Vidasfera potencia cada ataque sin bloquear el movimiento, y naturaleza Firme con el Ataque base 115 maximiza el daño. A Bocajarro sigue siendo el núcleo; Desarme controla objetos y pega a Fantasma y Psíquico; Terremoto cubre a Veneno, Acero y Roca; Puño Furia (tipo Fantasma, 50 de potencia que aumenta cada vez que Primeape recibe un golpe) se convierte en un golpe creciente durante el intercambio largo. Es viable y no óptimo porque depende de que el rival baje características y pierde el pico inmediato de Acometida con Cinta Elección.',
      alternatives: [
        {
          slot: 'move',
          value: 'GUNKSHOT',
          note: 'Lanzamugre castiga a las Hada, cediendo el control de objetos de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'ICEPUNCH',
          note: 'Puño Hielo hiere a Volador, Tierra y Dragón, a cambio de perder el crecimiento de Puño Furia.',
          replaces: 'RAGEFIST'
        }
      ]
    }
  ]
}

export default primeape