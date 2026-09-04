import type { PokemonTemplateSet } from '../../lib/types'

const noivern: PokemonTemplateSet = {
  internalName: 'NOIVERN',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INFILTRATOR',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['BOOMBURST', 'HURRICANE', 'DRACOMETEOR', 'UTURN'],
      justification:
        'Velocidad 123 es de las mejores del tier y At.Esp 97 con Gafas Elección basta para hacer daño real. Estruendo es la seña de identidad de Noivern: 140 de potencia de tipo Normal, y Allanamiento hace que ese golpe atraviese Sustituto y pantallas, así que ni siquiera un Sustituto detiene el barrido. Vendaval es la STAB de Volador para lo que resiste Normal; Draco Cometa es el golpe pesado puntual cuando hace falta quitar a un muro concreto; Ida y Vuelta permite escapar del bloqueo de Gafas y ceder el turno a un compañero manteniendo el momentum. Miedosa maximiza Velocidad; IV de Ataque a 0 para reducir el daño de confusión de Vendaval y de Bola Fija. Se prefiere Allanamiento a Cacheo o Telepatía porque anular Sustituto es lo que sostiene a Estruendo como arma de barrido.',
      alternatives: [
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Cambia potencia bruta por libertad de movimientos y entradas seguras frente a Trampa Rocas, útil si Noivern debe pivotar varias veces.'
        },
        {
          slot: 'move',
          value: 'FLAMETHROWER',
          note: 'Cobertura de Fuego contra los Acero que pueden entrar a Estruendo y Vendaval sin problema.',
          replaces: 'DRACOMETEOR'
        }
      ]
    },
    {
      role: 'support',
      isPrimary: false,
      confidence: 'viable',
      ability: 'INFILTRATOR',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['TAILWIND', 'BOOMBURST', 'HURRICANE', 'UTURN'],
      justification:
        'Con 123 de Velocidad base y entradas seguras gracias a Botas Gruesas, Noivern es un buen instalador de Viento Afín: duplica la Velocidad de todo el equipo durante cuatro turnos y, con Ida y Vuelta, se retira de inmediato para dar paso a un atacante que ahora golpea primero. Estruendo y Vendaval mantienen una amenaza ofensiva mientras el viento está activo. Es viable y no óptimo porque su volumen defensivo (85/80/80) es mediocre y solo suele instalar Viento Afín una vez por partida.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Recuperación para instalar Viento Afín más de una vez, a cambio de una vía de daño.',
          replaces: 'HURRICANE'
        }
      ]
    }
  ]
}

export default noivern
