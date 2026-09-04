import type { PokemonTemplateSet } from '../../lib/types'

const dragapult: PokemonTemplateSet = {
  internalName: 'DRAGAPULT',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CLEARBODY',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'DRAGONDARTS', 'PHANTOMFORCE', 'UTURN'],
      justification:
        'Dragapult en Añil V4.13 es el referente de velocidad pura del rango: 142 de base, por delante de prácticamente todo el metajuego. Su rol de barredor se apoya en Danza Dragón, que sube Ataque y Velocidad a la vez y lo deja fuera del alcance de cualquier chequeo rápido. Dracoflechas (50 golpea dos veces; 100 de potencia efectiva con STAB Dragón) es el STAB de alta fidelidad que aprovecha el Ataque 120, y Golpe Fantasma (90, STAB Fantasma) ofrece la cobertura de doble inmunidad de tipo Fantasma sin perder el turno gracias a que es un movimiento de dos turnos con invulnerabilidad. Ida y Vuelta permite recuperar momentum y salir contra un chequeo de hadas o acero sin quedar atrapado. Vidasfera potencia el daño a cambio del 30% de PS, un coste que la velocidad absoluta convierte en aceptable. La habilidad Cuerpo Puro evita que Intimidación o Trampa lo degraden, protegiendo el setup. Naturaleza Alegre y 252 en Ataque y Velocidad maximizan justo lo que el rol necesita: ganar el turno y barrer.',
      alternatives: [
        {
          slot: 'ability',
          value: 'INFILTRATOR',
          note: 'Infiltrador le permite golpear a través de Sustituto y pantallas, útil contra equipos de setup, cediendo la protección de Cuerpo Puro frente a Intimidación.'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas Gruesas lo protegen de Trampa Rocas y Púas, útil porque su doble tipo no vuela y entra y sale muchas veces, cediendo el pico de daño de Vidasfera.'
        },
        {
          slot: 'move',
          value: 'WILLOWISP',
          note: 'Fuego Fatuo le da control de estados además de daño, cediendo la velocidad de setup de Danza Dragón en un set más utilitario.'
        }
      ]
    },
    {
      role: 'revenge-killer',
      isPrimary: false,
      confidence: 'viable',
      ability: 'INFILTRATOR',
      item: 'CHOICEBAND',
      nature: 'JOLLY',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDARTS', 'PHANTOMFORCE', 'UTURN', 'SUCKERPUNCH'],
      justification:
        'Variante de revancha que no necesita montar setup: la Velocidad 142 ya supera a casi todo y Cinta Elección (con el Ataque 120) convierte a Dracoflechas en un STAB de 100 pegado al límite, ideal para rematar amenazas debilitadas al entrar. Golpe Fantasma mantiene la cobertura de Fantasma; Ida y Vuelta ejerce de pivote; y Golpe Bajo, con prioridad +1, es la red de seguridad contra rivales más rápidos o contra lo que intente hacer setup. Infiltrador le da valor frente a barreras. Es viable y no óptimo porque la Cinta bloquea por tipo y no puede cambiar de objetivo ni usar utili­dad cuando el rival adivina el movimiento.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera quita la restricción de la Cinta a cambio de un pico de daño algo menor y el coste de 30% de PS por golpe.'
        }
      ]
    }
  ]
}

export default dragapult
