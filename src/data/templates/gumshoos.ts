import type { PokemonTemplateSet } from '../../lib/types'

const gumshoos: PokemonTemplateSet = {
  internalName: 'GUMSHOOS',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STAKEOUT',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FACADE', 'KNOCKOFF', 'UTURN', 'CRUNCH'],
      justification:
        'Perfil de rompemuros: Ataque 110 con PS 88 y Velocidad 85 le permiten entrar, golpear y salir, y la Cinta Elección multiplica el Ataque por 1,5. El núcleo es Vigilante, que duplica el daño contra cualquier Pokémon que se incorpore al combate ese turno mediante un cambio; un rompedor con objeto de elección fuerza cambios rivales, así que cada predicción de cambio convierte a Fachada (STAB Normal de 70 que además se duplica si Gumshoos recibe quemadura, parálisis o veneno) o a Triturar en un golpe doble. Triturar cubre a los Fantasma, inmunes a Normal; Desarme retira el objeto del rival; e Ida y Vuelta conserva el impulso y también se duplica si el objetivo entra ese mismo turno. Naturaleza Firme y reparto en PS y Ataque: la Velocidad 85 con Firme no alcanza un tramo competitivo propio, así que el excedente va a volumen para repetir entradas. Mandíbula Fuerte no compite como habilidad porque el set no lleva colmillos: Triturar perdería el multiplicador, pero Vigilante aporta más al plan de forzar cambios.',
      alternatives: [
        {
          slot: 'move',
          value: 'TRAILBLAZE',
          note: 'Abrecaminos sube la Velocidad un nivel al golpear: bloqueado en él, Gumshoos gana impulso de velocidad que conserva al cambiar.',
          replaces: 'CRUNCH'
        },
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Terremoto cubre a Roca y Acero, que resisten Normal, cediendo la respuesta directa contra los Fantasma.',
          replaces: 'CRUNCH'
        },
        {
          slot: 'ability',
          value: 'STRONGJAW',
          note: 'Mandíbula Fuerte potencia los mordiscos (Triturar pasa a 120 efectivo), a costa de perder el doble daño por cambio de Vigilante.'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'STRONGJAW',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FACADE', 'CRUNCH', 'PSYCHICFANGS', 'FIREFANG'],
      justification:
        'Variante que explota Mandíbula Fuerte: los movimientos con flag de mordisco reciben un 1,5 de potencia, así que Triturar pega 120, Psicocolmillo 127 y Colmillo Ígneo 97, y la Vidasfera añade otro 1,3 por golpe. Psicocolmillo además retira las pantallas del rival y castiga a los Lucha que resisten Normal, mientras Colmillo Ígneo cubre al Acero, que resiste ambos tipos de STAB. Fachada mantiene el golpe Normal limpio y sigue siendo fiable si Gumshoos llega quemado o paralizado. Es viable y no óptimo porque exige más predicciones que el plan de Vigilante y el desgaste de la Vidasfera se acumula sobre PS 88.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEFANG',
          note: 'Colmillo Hielo cubre Tierra, Dragón y Planta, cediendo la cobertura contra Acero de Colmillo Ígneo.',
          replaces: 'FIREFANG'
        },
        {
          slot: 'move',
          value: 'THUNDERFANG',
          note: 'Colmillo Rayo golpea a Agua y Volador, cediendo la cobertura contra Lucha de Psicocolmillo.',
          replaces: 'PSYCHICFANGS'
        }
      ]
    }
  ]
}

export default gumshoos