import type { PokemonTemplateSet } from '../../lib/types'

const kangaskhan: PokemonTemplateSet = {
  internalName: 'KANGASKHAN',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SCRAPPY',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DOUBLEEDGE', 'EARTHQUAKE', 'SUCKERPUNCH', 'DRAINPUNCH'],
      justification:
        'Kangaskhan es de los pocos atacantes Normales con volumen real: PS 105, Defensa 80 y Defensa Especial 80 sostienen un Ataque 95 con Velocidad 90. Scrappy es la clave del set: hace que los movimientos de tipo Normal y Lucha alcancen a los Fantasmas, así que Doble Filo y Puño Drenaje no pueden ser bloqueados por Gengar, Dragapult o Mimikyu, y otorga inmunidad a Intimidación, la respuesta defensiva más común del meta. Vidasfera sobre Doble Filo (120, STAB) le da un pico ofensivo enorme; Puño Drenaje recupera la mitad del daño y además golpea Fantasma por Scrappy, cerrando el ciclo contra el tipo que mejor resiste Normal; Terremoto cubre Acero y Roca; Golpe Bajo (prioridad +1) resuelve el tier de Velocidad 90, que no alcanza a los barredores de 100+. Alegre con 252 Ataque y 252 Velocidad para no depender solo de la prioridad, y los 4 puntos restantes en Defensa para reforzar la entrada física que ya aguanta PS 105.',
      alternatives: [
        {
          slot: 'move',
          value: 'FAKEOUT',
          note: 'Sorpresa (prioridad +3) da un flinch y rompe Banda Aguante el turno de entrada, a cambio de la prioridad recargable de Golpe Bajo.',
          replaces: 'SUCKERPUNCH'
        },
        {
          slot: 'move',
          value: 'ICEPUNCH',
          note: 'Puño Hielo cubre Dragón, Tierra y Planta que resisten el combo Normal/Tierra, cediendo la recuperación y la presión a Fantasma.',
          replaces: 'DRAINPUNCH'
        },
        {
          slot: 'item',
          value: 'SILKSCARF',
          note: 'Pañuelo Seda mantiene un 20% en el STAB Normal sin el retroceso de Vidasfera, para ganar longevidad en un set con Doble Filo.'
        },
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Firme con el reparto 252 PS / 252 Ataque sacrifica Velocidad por una entrada más, apoyándose en el PS 105 y Golpe Bajo.'
        }
      ]
    },
    {
      role: 'lead',
      isPrimary: false,
      confidence: 'viable',
      ability: 'ACOMETIDA',
      item: 'FOCUSSASH',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FAKEOUT', 'DOUBLEEDGE', 'EARTHQUAKE', 'SUCKERPUNCH'],
      justification:
        'Variante de apertura con Acometida, la habilidad oculta de Añil: en el primer turno en campo el Pokémon gana 50% extra de Velocidad y 20% extra de Ataque. En un lead ese turno coincide con Sorpresa (prioridad +3), que roba un flinch y rompe Banda Aguante y Robustez del rival mientras recibe el bonus de Ataque, y con Banda Aguante propia para sobrevivir al contraataque del turno 1: los tres efectos se apilan en la misma entrada. Doble Filo, Terremoto y Golpe Bajo conservan la cobertura del set principal. Es viable y no óptimo porque la bonificación dura un solo turno, pierde la cobertura de Fantasma y la inmunidad a Intimidación de Scrappy, y depende de abrir la partida para exprimir la ventana.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEPUNCH',
          note: 'Puño Hielo castiga a los leads de Planta o Dragón, cediendo la prioridad de Golpe Bajo.',
          replaces: 'SUCKERPUNCH'
        }
      ]
    }
  ]
}

export default kangaskhan