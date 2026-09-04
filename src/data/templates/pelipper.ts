import type { PokemonTemplateSet } from '../../lib/types'

const pelipper: PokemonTemplateSet = {
  internalName: 'PELIPPER',
  templates: [
    {
      role: 'weather-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DRIZZLE',
      item: 'DAMPROCK',
      nature: 'BOLD',
      evs: [248, 0, 252, 0, 8, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HURRICANE', 'HYDROPUMP', 'UTURN', 'ROOST'],
      justification:
        'Llovizna es el motivo de la plantilla: invoca lluvia al entrar y, con Roca Lluvia, la extiende a ocho turnos, lo que sostiene a un compañero de Nado Rápido o a atacantes de agua durante casi toda la fase clave. El perfil 80/100/70 con reparto físico defensivo y Osada le permite entrar varias veces a lo largo de la partida a plantar el clima. Bajo lluvia, Vendaval pasa a precisión perfecta y se convierte en un STAB de 110 fiable; Hidrobomba es el golpe de agua potenciado por el clima. Ida y Vuelta traslada el momentum a la ofensiva sin quedar expuesto, y Respiro mantiene la longevidad. La Velocidad 65 no es un problema porque el rol es reactivo, no proactivo.',
      alternatives: [
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Si el equipo no depende de la lluvia extendida, ignora Trampa Rocas en cada reentrada.'
        },
        {
          slot: 'move',
          value: 'SCALD',
          note: 'Menos potencia que Hidrobomba pero precisión perfecta y opción de quemar al que entra.',
          replaces: 'HYDROPUMP'
        },
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Control de trampas propio a cambio de la recuperación fiable de Respiro.',
          replaces: 'ROOST'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Quita objetos a los rivales que intentan aprovecharse de Pelipper como pivote.',
          replaces: 'UTURN'
        }
      ]
    }
  ]
}

export default pelipper
