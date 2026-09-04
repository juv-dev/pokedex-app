import type { PokemonTemplateSet } from '../../lib/types'

const koraidon: PokemonTemplateSet = {
  internalName: 'KORAIDON',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ORICHALCUMPULSE',
      item: 'LEFTOVERS',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'COLLISIONCOURSE', 'FLAREBLITZ', 'DRAGONCLAW'],
      justification:
        'Koraidon de Añil es una caja ofensiva con Ataque 135, Velocidad 135 y PS 100. Latido Oricalco pone el tiempo soleado al entrar y sube su Ataque en vez de recurrir a un objeto de impulso externo: el sol además resalta Envite Ígneo. Danza Espada apila +2 Ataque sobre el bono de la habilidad. Nitrochoque (100, STAB Lucha) incrementa el daño contra objetivos a los que es supereficaz, Envite Ígneo (120, STAB Fuego) spamea quemando en contacto aunque gaste PS, y Garra Dragón es el STAB Dragón de daño fiable sin confusión. Naturaleza Alegre con reparto en Ataque y Velocidad asegura el empate de velocidad con los 135 de la categoría; Restos mitigan el desgaste del retroceso de Envite Ígneo, que no tiene Roost en su repertorio.',
      alternatives: [
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Pivote con Ida y Vuelta para mantener el momentum y salir de contras, a cambio de un slot de cobertura.',
          replaces: 'DRAGONCLAW'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante garantiza la Danza Espada frente a un golpe mortal, a cambio de perder la recuperación gradual de Restos.'
        }
      ]
    }
  ]
}

export default koraidon
