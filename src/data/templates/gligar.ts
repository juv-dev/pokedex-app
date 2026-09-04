import type { PokemonTemplateSet } from '../../lib/types'

const gligar: PokemonTemplateSet = {
  internalName: 'GLIGAR',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'IMMUNITY',
      item: 'EVIOLITE',
      nature: 'IMPISH',
      evs: [244, 0, 248, 0, 16, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'UTURN', 'ROOST', 'DEFOG'],
      justification:
        'Con Mineral Evolutivo, la Defensa 105 pasa a un valor efectivo cercano a 157 y la Def.Esp 65 sube a unos 97, así que un Pokémon que sin evolucionar parece mediocre se convierte en un pivote físico muy sólido con PS 65 y Velocidad 85 decente. Inmunidad bloquea el envenenamiento, incluido Tóxico, lo que anula la forma habitual de desgastar a un muro sin recuperación instantánea propia; con Descanso Alas encima, Gligar se cura medio PS y se queda absorbiendo físicos indefinidamente. Terremoto es el STAB fiable de tipo tierra, Ida y Vuelta traslada el momentum a un compañero tras forzar el cambio, y Vuelo limpia las trampas del campo, algo que el equipo agradece porque Gligar quiere entrar muchas veces. El tipo Tierra/Volador le da inmunidad a Eléctrico y a Tierra, pero es 4x débil a Hielo y 2x a Agua; la inversión 244/248/16 maximiza la Defensa manteniendo un punto de Velocidad útil.',
      alternatives: [
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas si Gligar es el colocador del equipo; se cambia por Vuelo y renuncia a la retirada de trampas.',
          replaces: 'DEFOG'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme quita objetos y castiga a los muros que entran a pararlo, a cambio del pivoteo de Ida y Vuelta.',
          replaces: 'UTURN'
        },
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Tóxico para minar a los muros defensivos rivales aprovechando la longevidad de Gligar, a costa de la limpieza de trampas.',
          replaces: 'DEFOG'
        }
      ]
    }
  ]
}

export default gligar
