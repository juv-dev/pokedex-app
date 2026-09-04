import type { PokemonTemplateSet } from '../../lib/types'

const okidogi: PokemonTemplateSet = {
  internalName: 'OKIDOGI',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TOXICCHAIN',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 0, 4],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['KNOCKOFF', 'CLOSECOMBAT', 'GUNKSHOT', 'IRONHEAD'],
      justification:
        'Okidogi es un rompemuros físico con Ataque 128 y Defensa 115, pero su Defensa Especial 80 es su flanco: Chaleco Asalto lo cubre y a la vez permite su reparto en PS y Ataque. Cadena Tóxica envenena gravemente en el contacto, así que Desarme y A Bocajarro castigan con daño y a la vez abren la posibilidad del veneno grave. Desarme quita el objeto y golpea Siniestro, A Bocajarro (120) es el STAB Lucha que rompe muros aunque baja defensas, Lanzamugre (120, 90% precise) es el STAB Veneno, y Cabeza de Hierro aporta la cobertura Acero contra Hada que resiste Lucha y Veneno. Naturaleza Firme y reparto en PS y Ataque; la Velocidad 80 es secundaria porque el planteo es entrar, aguantar el golpe físico y responder. El Chaleco Asalto prohíbe los estados, por eso los cuatro slots son ataques.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos habilitan una variante con Cuerpo 92/Def 115 más longeva, a costa de la cobertura especial del Chaleco Asalto.'
        },
        {
          slot: 'move',
          value: 'HIGHHORSEPOWER',
          note: 'Triple Patada da cobertura contra Acero y Eléctrico adicionales, a cambio del golpe limpio a Hada de Cabeza de Hierro.',
          replaces: 'IRONHEAD'
        },
        {
          slot: 'ability',
          value: 'GUARDDOG',
          note: 'Perro Guardián sube Ataque si le bajan las stats e impide ser forzado a cambiar, útil contra equipos con Intimidación.'
        }
      ]
    }
  ]
}

export default okidogi
