import type { PokemonTemplateSet } from '../../lib/types'

const bastiodon: PokemonTemplateSet = {
  internalName: 'BASTIODON',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STURDY',
      item: 'LEFTOVERS',
      nature: 'RELAXED',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'BODYPRESS', 'FOULPLAY', 'ROAR'],
      justification:
        'Defensa 168 y Def. Esp. 138 con tipo Roca/Acero (resiste Normal, Volador, Roca, Bicho, Acero, Psíquico, Fuego, Hielo, Dragón, Hada y Fantasma; inmune a Veneno) lo hacen uno de los mejores muros mixtos para poner Trampa Rocas. Plancha Corporal usa la Defensa 168 como valor de ataque, así que pega fuerte pese al Ataque 52. Juego Sucio usa el Ataque del rival, castigando a los físicos sin invertir nada propio. Rugido saca a los sweepers con setup y acumula daño de trampas. Robustez le garantiza sobrevivir el primer golpe incluso a sus debilidades grandes (Lucha y Tierra x2, Agua). Plácida (+Def, -Vel) porque la Velocidad 30 no aporta nada y así maximiza Plancha Corporal; Insonorizar solo cubre un nicho anti-sonido.',
      alternatives: [
        {
          slot: 'move',
          value: 'IRONHEAD',
          note: 'STAB de Acero fiable contra Hada, Roca y Hielo si preferís daño propio a depender del Ataque rival.',
          replaces: 'FOULPLAY'
        },
        {
          slot: 'move',
          value: 'HEAVYSLAM',
          note: 'Castiga a rivales livianos (Hada, Hielo) con potencia por peso; Bastiodon pesa 149,5 kg.',
          replaces: 'FOULPLAY'
        },
        {
          slot: 'move',
          value: 'REST',
          note: 'Recuperación total; combínalo con equipos de apoyo de estados o con Sueño Talk.',
          replaces: 'ROAR'
        }
      ]
    }
  ]
}

export default bastiodon
