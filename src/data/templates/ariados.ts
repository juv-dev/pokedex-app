import type { PokemonTemplateSet } from '../../lib/types'

const ariados: PokemonTemplateSet = {
  internalName: 'ARIADOS',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'viable',
      ability: 'POISONTOUCH',
      item: 'FOCUSSASH',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STICKYWEB', 'TOXICSPIKES', 'MEGAHORN', 'SUCKERPUNCH'],
      justification:
        'En Añil V4.13 Ariados tiene Ataque 110, cifra que respalda un lead de trampas con amenaza ofensiva real. Red Viscosa baja la Velocidad del rival que entra y Púas Tóxicas envenenan al que pise el campo, dos capas de trampa que se acumulan. Banda Aguante garantiza al menos una acción de trampa contra un lead más rápido o más fuerte. Megacuerno es un STAB de Bicho de 120 que castiga de inmediato, y Golpe Bajo aprovecha la prioridad para pegar al que cambia o al que va más rápido. Toque Tóxico añade un 30% de envenenar con cada golpe de contacto de Megacuerno o Golpe Bajo. Con defensas 70/60/60 y Velocidad 80 es un lead de un solo uso, no un barredor: coloca, pega una vez y cae.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme quita el objeto al rival y aporta utilidad si el equipo no quiere la segunda capa de Púas Tóxicas.',
          replaces: 'TOXICSPIKES'
        },
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Danza Espada convierte un turno en presión ofensiva cuando las trampas no hacen falta, a costa de Red Viscosa.',
          replaces: 'STICKYWEB'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas Gruesas dejan a Ariados reentrar sin sufrir sus propias trampas ni Trampa Rocas para poner una segunda capa más tarde.'
        },
        {
          slot: 'ability',
          value: 'SWARM',
          note: 'Enjambre potencia el STAB de Bicho por debajo de 1/3 de PS, opción para una versión más ofensiva que no depende del contacto.'
        }
      ]
    }
  ]
}

export default ariados
