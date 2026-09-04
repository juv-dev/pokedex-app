import type { PokemonTemplateSet } from '../../lib/types'

const reuniclus: PokemonTemplateSet = {
  internalName: 'REUNICLUS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MAGICGUARD',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [252, 0, 4, 252, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'PSYSHOCK', 'FOCUSBLAST', 'RECOVER'],
      justification:
        'El perfil manda: At.Esp. 125, PS 110 y Def.Esp. 85 con Velocidad 30 describen un wincon lento que gana partidas montando aumentos detrás de su volumen, no superando en iniciativa. Muro Mágico es la pieza central: solo recibe daño de ataques directos, así que ignora Trampa Rocas, Púas, veneno, quemadura, tormenta de arena y, sobre todo, el retroceso de Vidasfera, que pasa a ser potencia gratis. Con Paz Mental sube At.Esp. y Def.Esp. a la vez y, apoyado en Recuperación y en PS 110, se vuelve casi imposible de tumbar para cualquier ofensiva especial o de estado que no critique. Psicocarga es la STAB elegida porque golpea a la Defensa física y perfora a los muros especiales y a Blissey, que de otro modo lo frenan en seco. Onda Certera cubre a Siniestro y Acero, los tipos que aguantan Psíquico. Naturaleza Modesta porque la Velocidad es causa perdida y conviene todo el At.Esp.; el reparto 252 PS / 252 At.Esp. maximiza volumen y presión sin sacrificar la longevidad que sostiene el plan.',
      alternatives: [
        {
          slot: 'move',
          value: 'SHADOWBALL',
          note: 'Precisión fiable y golpea a Psíquico y Fantasma; se pierde la cobertura contra Siniestro y Acero de Onda Certera.',
          replaces: 'FOCUSBLAST'
        },
        {
          slot: 'move',
          value: 'TRICKROOM',
          note: 'Convierte el set en abridor de Espacio Raro para el equipo, a cambio de la recuperación que sostiene el barrido en solitario.',
          replaces: 'RECOVER'
        },
        {
          slot: 'nature',
          value: 'BOLD',
          note: 'Más aguante físico para un wincon puro que no necesita el pico de At.Esp. inmediato.'
        }
      ]
    },
    {
      role: 'trick-room-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'MAGICGUARD',
      item: 'LIFEORB',
      nature: 'QUIET',
      evs: [252, 0, 4, 252, 0, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['TRICKROOM', 'PSYCHIC', 'SHADOWBALL', 'FOCUSBLAST'],
      justification:
        'Variante de apoyo para equipos de Espacio Raro. Con Velocidad 30 y un IV de Velocidad a 0, Reuniclus queda entre los Pokémon más lentos del juego, así que activa Espacio Raro y ataca primero durante los cinco turnos siguientes. At.Esp. 125 con Vidasfera y sin retroceso gracias a Muro Mágico convierte esos turnos en daño limpio: Psíquico como STAB principal, Bola Sombra para Psíquico y Fantasma y Onda Certera para Siniestro y Acero. Naturaleza Mansa para subir At.Esp. renunciando a una Velocidad que en este rol solo estorba. Muro Mágico también asegura que las trampas y el veneno no lo desgasten mientras espera el turno para instalar el campo.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Pega al lado físico para no depender del cálculo especial contra muros como Blissey.',
          replaces: 'PSYCHIC'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Longevidad pasiva si el equipo prefiere que el setter de Espacio Raro dure varias reactivaciones en vez de pegar más fuerte.'
        }
      ]
    }
  ]
}

export default reuniclus
