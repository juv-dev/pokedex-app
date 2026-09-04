import type { PokemonTemplateSet } from '../../lib/types'

const hitmontop: PokemonTemplateSet = {
  internalName: 'HITMONTOP',
  templates: [
    {
      role: 'hazard-removal',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INTIMIDATE',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RAPIDSPIN', 'CLOSECOMBAT', 'SUCKERPUNCH', 'TRIPLEAXEL'],
      justification:
        'El perfil de Hitmontop en Añil (PS 50 / Def 95 / Def. Esp. 110) es defensivo pese al Ataque 95, y su Velocidad 70 lo saca del tier ofensivo. Intimidación baja el Ataque del rival al entrar, lo que sobre esa Defensa lo hace una entrada segura contra rompemuros físicos y le compra el turno para girar. Giro Rápido limpia las trampas del campo propio sin ceder el turno como Despejar. A Bocajarro es el STAB de castigo cuando algo entra a bloquear el giro. Golpe Bajo (prioridad) revienta a los Fantasma que son inmunes a Giro Rápido y tratan de pararlo, y Triple Axel cubre a los Vuelo, Planta y Dragón. Reparto físico defensivo con Agitada. Restos sostiene los PS entre entradas.',
      alternatives: [
        {
          slot: 'ability',
          value: 'TECHNICIAN',
          note: 'Experto potencia x1,5 los movimientos de 60 o menos: sube Giro Rápido (50) y Puño Certero (40) para una versión más ofensiva del pivote.'
        },
        {
          slot: 'move',
          value: 'MACHPUNCH',
          note: 'Puño Certero es prioridad que no depende de predecir el cambio como Golpe Bajo y gana valor con Experto.',
          replaces: 'SUCKERPUNCH'
        },
        {
          slot: 'move',
          value: 'BULKUP',
          note: 'Corpulencia lo convierte en un wincon defensivo lento si el equipo ya tiene otra retirada de trampas, cediendo cobertura.',
          replaces: 'TRIPLEAXEL'
        },
        {
          slot: 'nature',
          value: 'CAREFUL',
          note: 'Cauta refuerza el flanco especial, que es el más alto de base, si el equipo necesita esa esponja.'
        }
      ]
    }
  ]
}

export default hitmontop
