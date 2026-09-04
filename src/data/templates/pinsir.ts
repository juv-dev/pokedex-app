import type { PokemonTemplateSet } from '../../lib/types'

const pinsir: PokemonTemplateSet = {
  internalName: 'PINSIR',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'viable',
      ability: 'MOXIE',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'XSCISSOR', 'CLOSECOMBAT', 'EARTHQUAKE'],
      justification:
        'En Añil V4.13 Pinsir tiene Ataque 125, Defensa 100 y Velocidad 85. La Velocidad no alcanza para barrer de entrada, así que la vía realista es Danza Espada para pasar a Ataque efectivo 250 y que Autoestima sume otro nivel con cada debilitamiento, reduciendo la importancia de la carrera de Velocidad a medida que avanza el barrido. Tijera X es el STAB de tipo Bicho, A Bocajarro (120) castiga a Normal, Acero, Roca y Siniestro, y Terremoto (100) cubre a Veneno, Acero, Fuego y Eléctrico. Vidasfera maximiza el daño inmediato tras el impulso porque la Defensa 100 ya aporta algún turno de instalación sin necesitar objeto defensivo. Naturaleza Alegre para no quedar por debajo de otros base 85 y de los base 80 con naturaleza neutra.',
      alternatives: [
        {
          slot: 'ability',
          value: 'MOLDBREAKER',
          note: 'Ignora Robustez, Levitación y las habilidades de absorción, útil si el equipo necesita que Pinsir traspase muros con habilidad defensiva; se pierde el efecto bola de nieve de Autoestima.'
        },
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Roca Afilada pega a Volador, Fuego, Bicho y Hielo que Terremoto no alcanza, a cambio de la cobertura contra Veneno, Acero y Eléctrico.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme elimina el objeto rival y pega a Fantasma y Psíquico sin bajar las defensas propias, a cambio de la potencia bruta de A Bocajarro contra Acero y Roca.',
          replaces: 'CLOSECOMBAT'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'MOLDBREAKER',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['XSCISSOR', 'CLOSECOMBAT', 'EARTHQUAKE', 'STONEEDGE'],
      justification:
        'Alternativa sin instalación: Banda Elección sobre Ataque 125 con naturaleza Firme genera presión desde el primer turno y Rompemoldes deja pasar cualquier golpe por encima de Robustez, Levitación o absorciones. Tijera X es el STAB, A Bocajarro y Terremoto son la cobertura principal y Roca Afilada completa contra Volador y Fuego. La Velocidad 85 obliga a jugar con predicción de cambios, por eso encaja mejor en equipos con pivotes que traigan a Pinsir con seguridad. Firme en lugar de Alegre porque, bloqueado por la Banda, el objetivo es el máximo daño y la Velocidad ya no decide la mayoría de combates relevantes.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Cambia potencia por utilidad: retira el objeto del rival y golpea a Fantasma, a cambio de la cobertura de Roca Afilada.',
          replaces: 'STONEEDGE'
        }
      ]
    }
  ]
}

export default pinsir
