import type { PokemonTemplateSet } from '../../lib/types'

const drifblim: PokemonTemplateSet = {
  internalName: 'DRIFBLIM',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'UNBURDEN',
      item: 'SITRUSBERRY',
      nature: 'JOLLY',
      evs: [252, 4, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['ACROBATICS', 'KNOCKOFF', 'STRENGTHSAP', 'DESTINYBOND'],
      justification:
        'El PS 150 contrasta con unas defensas de 44 y 54, así que Drifblim no aguanta de forma fiable: su plan es un golpe, consumir la Baya Zidra y activar Liviano, que duplica la Velocidad y lleva su base 80 por encima de casi toda la metagame. Con el objeto ya gastado, Acrobacia sube de 55 a 110 de potencia y pasa a ser su ataque principal, porque no tiene STAB fantasma físico que valga la pena. Desarme retira el objeto rival y cubre de forma neutra lo que Acrobacia no toca. Drenaje Anima recupera en función del Ataque del objetivo y se apoya en el enorme PS para volver a entrar. Última Baza convierte su fragilidad en un intercambio: si Drifblim cae, se lleva por delante al atacante. Alegre porque no hay movimiento de mejora y necesita el tope de Velocidad antes de activar Liviano.',
      alternatives: [
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Cambia el enfoque a soporte: limpia trampas aprovechando el PS alto, a cambio del intercambio de Última Baza.',
          replaces: 'DESTINYBOND'
        },
        {
          slot: 'move',
          value: 'WILLOWISP',
          note: 'Desgaste y control de físicos si el equipo no necesita el filtro de objetos de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Perfil defensivo con Detonación: ignora Trampa Rocas en cada reentrada, pero renuncia a activar Liviano.'
        }
      ]
    }
  ]
}

export default drifblim
