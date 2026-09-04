import type { PokemonTemplateSet } from '../../lib/types'

const centiskorch: PokemonTemplateSet = {
  internalName: 'CENTISKORCH',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FLAMEBODY',
      item: 'HEAVYDUTYBOOTS',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FLAREBLITZ', 'LEECHLIFE', 'POWERWHIP', 'KNOCKOFF'],
      justification:
        'Centiskorch combina PS 100 y Def. Esp. 90 con un Ataque 115, y Cuerpo Llama lo convierte en un atacante resistente: cada atacante de contacto tiene un 30% de probabilidad de salir quemado, un castigo pasivo que compensa su flanco físico más débil. Envite Ígneo (120) es la STAB Fuego durísima, Chupavidas recupera la mitad del daño hecho y sostiene su presencia, Latigazo (120) cubre Agua, Roca y Tierra y Desarme arranca objetos y castiga los cambios. Botas Gruesas son obligadas porque Fuego/Bicho es 4x débil a Roca: sin ellas no puede entrar y salir sin pagar un sexto de PS por Trampa Rocas. Firme con 252 PS / 252 At. maximiza el daño manteniendo el volumen; su trabajo no es superar en velocidad (65), sino aguantar y golpear duro turno a turno.',
      alternatives: [
        {
          slot: 'ability',
          value: 'FLASHFIRE',
          note: 'Absorbe Fuego otorga inmunidad a Fuego y potencia un 50% los ataques de fuego tras recibir uno, ideal contra equipos que abusen del tipo; cede el castigo por contacto de Cuerpo Llama.',
          replaces: 'FLAMEBODY'
        },
        {
          slot: 'move',
          value: 'COIL',
          note: 'Enrosque sube Ataque, Defensa y Precisión a la vez y convierte a Centiskorch en un setup de tanque lento, a cambio del robo de objeto de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos dan curación pasiva por turno, renunciando a la protección contra Roca de las Botas Gruesas.',
          replaces: 'HEAVYDUTYBOOTS'
        }
      ]
    }
  ]
}

export default centiskorch
