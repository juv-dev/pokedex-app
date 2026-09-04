import type { PokemonTemplateSet } from '../../lib/types'

const klawf: PokemonTemplateSet = {
  internalName: 'KLAWF',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ANGERSHELL',
      item: 'WHITEHERB',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHELLSMASH', 'STONEEDGE', 'EARTHQUAKE', 'TRAILBLAZE'],
      justification:
        'El núcleo es la doble fuente de aumento ofensivo: Rompecoraza sube Ataque y Velocidad +2 a la vez que baja Defensa y Defensa Especial, y Arrebato de Cólera, al caer a la mitad de PS, vuelve a subir Ataque y Velocidad, convirtiendo un golpe duro en el despegue para barrer. La Hierba Blanca anula la caída defensiva de Rompecoraza, conservando el volumen de PS 80 / Def 115. Roca Afilada y Terremoto son la doble STAB con cobertura casi total, y Seña Agresiva añade otra capa de Velocidad y sirve de golpe neutro. Naturaleza Firme y reparto en PS y Ataque; la Velocidad base 75 la resuelve Rompecoraza. La fracción inicial exige entrar en un rival que no lo reviente antes de romper el caparazón.',
      alternatives: [
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Garantiza el turno de Rompecoraza contra rivales más rápidos y fuertes, a costa de sanar la caída defensiva.'
        },
        {
          slot: 'ability',
          value: 'REGENERATOR',
          note: 'Cambia a un pivot defensivo que recupera 1/3 de PS al cambiar, perdiendo el bonus ofensivo de Cólera.'
        }
      ]
    }
  ]
}

export default klawf
