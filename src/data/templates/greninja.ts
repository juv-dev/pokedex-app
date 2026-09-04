import type { PokemonTemplateSet } from '../../lib/types'

const greninja: PokemonTemplateSet = {
  internalName: 'GRENINJA',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PROTEAN',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HYDROPUMP', 'ICEBEAM', 'DARKPULSE', 'UTURN'],
      justification:
        'Velocidad 122 y At. Esp. 103 lo colocan en el tier de barredores especiales. Mutatipo (habilidad oculta) en Añil cambia el tipo de Greninja al del movimiento justo antes de usarlo, sin límite por cambio de entrada, así que cada casilla del set recibe STAB. Hidrobomba es el ataque principal, Pulso Umbrío completa el par Agua/Siniestro con STAB, Rayo Hielo cubre Dragón, Tierra, Planta y Volador, e Ida y Vuelta hace que Greninja pase a tipo Bicho y golpee mientras conserva el momentum y sale ante sus counters. Vidasfera potencia todo porque Mutatipo garantiza el STAB en las cuatro casillas. Miedosa para no ceder la carrera de velocidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'WATERSHURIKEN',
          note: 'Prioridad +1 multigolpe con STAB de Mutatipo: revienta Banda Focus y remata debilitados más rápidos, a cambio del pivoteo de Ida y Vuelta.',
          replaces: 'UTURN'
        },
        {
          slot: 'move',
          value: 'GRASSKNOT',
          note: 'Para Agua, Roca y Tierra pesados que aguantan Hidrobomba, a costa de la cobertura de hielo.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'move',
          value: 'SPIKES',
          note: 'Nicho de lead ofensivo: coloca una capa de Púas y sigue siendo amenaza inmediata.',
          replaces: 'UTURN'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Cañón inmediato sin retroceso, a cambio de quedar bloqueado en un movimiento.'
        }
      ]
    }
  ]
}

export default greninja
