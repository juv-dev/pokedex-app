import type { PokemonTemplateSet } from '../../lib/types'

const solgaleo: PokemonTemplateSet = {
  internalName: 'SOLGALEO',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FULLMETALBODY',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SUNSTEELSTRIKE', 'EARTHQUAKE', 'FLAREBLITZ', 'CLOSECOMBAT'],
      justification:
        'Guardia Metálica evita que sus características bajen por causa de los rivales, y sobre ese perfil 137/107/89 la Cinta Elección es la vía más directa para rentabilizar el Ataque 137: un Solgaleo que entra, recibe el golpe y responde con Meteoimpacto (100, STAB Acero que ignora la habilidad del rival: ni Disfraz, ni Robustez ni Guardia Espectro lo detienen) no gasta el turno en set-up. Terremoto (100) rompe a Acero, Fuego y Eléctrico; Envite Ígneo (120) castiga a los acero que resisten Meteoimpacto; y A Bocajarro (120, STAB Lucha) cierra la cobertura contra Normal, Siniestro, Hielo y Roca. Firme con EV en PS y Ataque: 137/107/89 con PS máximo aguantan el switch-in, y el 97 de Velocidad base no gana carreras con o sin la Cinta. Sin Danza Espada ni Danza Dragón en su repertorio, la Cinta es el multiplicador que este Acero/Psíquico sí tiene.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme (65) arranca el Restos o la Baya del muro y abre el juego largo, cediendo la cobertura de A Bocajarro.',
          replaces: 'CLOSECOMBAT'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera da potencia sin bloqueo de movimiento, a cambio del retroceso acumulado turno a turno.',
          replaces: 'CHOICEBAND'
        },
        {
          slot: 'move',
          value: 'HEAVYSLAM',
          note: 'Cuerpo Pesado (100, STAB) escala con el peso 230.0 de Solgaleo y castiga a los ligeros, cediendo el efecto ignora-habilidad de Meteoimpacto.',
          replaces: 'SUNSTEELSTRIKE'
        }
      ]
    },
    {
      role: 'tank',
      isPrimary: false,
      confidence: 'viable',
      ability: 'FULLMETALBODY',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MORNINGSUN', 'SUNSTEELSTRIKE', 'EARTHQUAKE', 'IRONDEFENSE'],
      justification:
        'Variante de muro viable: con Guardia Metálica bloqueando todo intento de menguar sus estadísticas, Solgaleo puede invertir en Defensa Férrea (+2 Defensa) sin que nadie le revierta el trabajo, y sus 137/107/89 con 137 de PS y Restos lo sostienen el tiempo suficiente para que la Defensa Férrea mande. Sol Matinal (recupera la mitad del PS, más en sol) es la recuperación que un tanque exige, Meteoimpacto mantiene el golpe STAB ignora-habilidades y Terremoto cubre a Acero y Fuego. Cauta con EV en PS y Def. Esp. porque los 107 de Defensa base ya aguantan el lado físico y el 89 de Def. Esp. es el costo que hay que pagar. Viable y no óptima: el rol de breaker con Cinta le saca más partido al mismo bicho, y sin acceso a un movimiento de recuperación giratorio el muro queda corto contra hubs de desgaste.',
      alternatives: [
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Tóxico convierte el muro en desgaste activo y compacta el set, cediendo la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'move',
          value: 'CALMMIND',
          note: 'Paz Mental parchea el lado especial del tanque y convierte el set en un semi-setup, cediendo la Defensa Férrea.',
          replaces: 'IRONDEFENSE'
        }
      ]
    }
  ]
}

export default solgaleo