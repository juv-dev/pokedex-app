import type { PokemonTemplateSet } from '../../lib/types'

const overqwil: PokemonTemplateSet = {
  internalName: 'OVERQWIL',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TOXICDEBRIS',
      item: 'HEAVYDUTYBOOTS',
      nature: 'IMPISH',
      evs: [252, 4, 252, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPIKES', 'BARBBARRAGE', 'CRUNCH', 'LIQUIDATION'],
      justification:
        'Capa Tóxica ("al recibir daño de un ataque físico, lanza una trampa de púas tóxicas a los pies del rival") convierte a Overqwil en un colocador de trampas que no necesita turnos para la capa de veneno: cada golpe físico entrante la pone gratis. Así, el espacio de movimiento se usa en la segunda capa (Púas) y en daño. Mil Púas Tóxicas es la firma del ciclo: 60 de potencia que se dobla contra objetivos envenenados, y las propias Púas Tóxicas de Capa Tóxica envenenan a casi todo lo que entra, de modo que el STAB veneno golpea de costumbre a 120. Triturar cubre Fantasma y Psíquico, y Hidroariete pega a Tierra, Roca y Fuego que resisten el dúo Siniestro/Veneno. Botas Gruesas porque un colocador de trampas no puede pagar 2x Roca por cada reentrada. Agitada con PS y Defensa para maximizar las activaciones de Capa Tóxica: cuantos más golpes físicos aguante, más púas deja caer.',
      alternatives: [
        {
          slot: 'item',
          value: 'BLACKSLUDGE',
          note: 'Lodo Negro restaura PS de forma pasiva por ser tipo Veneno, a costa de sufrir de nuevo el daño de las trampas al reentrar.'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga a los atacantes de contacto que además activan Capa Tóxica, sumando daño residual por golpe recibido.'
        },
        {
          slot: 'ability',
          value: 'INTIMIDATE',
          note: 'Intimidación baja el Ataque rival al entrar y aumenta la supervivencia física, a cambio de la capa de púas automática.'
        },
        {
          slot: 'move',
          value: 'TOXICSPIKES',
          note: 'Segunda capa manual cuando el rival ataca sobre todo por el lado especial y Capa Tóxica no se activa, cediendo la presión de Hidroariete.',
          replaces: 'LIQUIDATION'
        },
        {
          slot: 'move',
          value: 'GUNKSHOT',
          note: 'Lanzamugre (120, 30% de envenenar) potencia el STAB sin depender de que el objetivo ya esté envenenado, a cambio de la precisión 90.',
          replaces: 'BARBBARRAGE'
        }
      ]
    }
  ]
}

export default overqwil