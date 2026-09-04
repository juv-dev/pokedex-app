import type { PokemonTemplateSet } from '../../lib/types'

const sandaconda: PokemonTemplateSet = {
  internalName: 'SANDACONDA',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SANDSPIT',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'BODYPRESS', 'EARTHQUAKE', 'GLARE'],
      justification:
        'Sandaconda es un muro físico puro: Defensa 125 con Ataque 107 y una Velocidad 71 que le permite salir por delante de amenazas lentas. Expulsarena convierte cada golpe que recibe en una Tormenta de Arena que hace 1/16 de daño residual al rival en cada turno, un castigo pasivo ideal para un muro que no tiene movimiento de curación; Restos compensa esa falta de recovery. Plancha Corporal usa la propia Defensa 125 para el cálculo de daño, lo que convierte a la estadística defensiva en ataque STAB-neutro de tipo Lucha, y Terremoto es la STAB Tierra que pega al flanco físico. Deslumbrar paraliza a los barredores que intentan montar setup o a los atacantes más rápidos, y Trampa Rocas aprovecha los turnos muertos para colocar la trampa de entrada. Naturaleza Agitada con 252 PS / 252 Def maximiza el volumen justo en la estadística que sostiene tanto la defensa como el daño de Plancha Corporal.',
      alternatives: [
        {
          slot: 'ability',
          value: 'SHEDSKIN',
          note: 'Mudar ofrece un 30% de probabilidad de curar un estado al final de cada turno, más fiable que Expulsarena si el equipo ya tiene clima o no quiere el chip de arena para un compañero.',
          replaces: 'SANDSPIT'
        },
        {
          slot: 'move',
          value: 'COIL',
          note: 'Enrosque sube Ataque, Defensa y Precisión a la vez, convirtiendo la muro en una amenaza de setup lenta, a cambio de perder la parálisis de Deslumbrar.',
          replaces: 'GLARE'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga a los atacantes de contacto con la Defensa 125, cambiando la curación de Restos por presión pasiva.',
          replaces: 'LEFTOVERS'
        }
      ]
    }
  ]
}

export default sandaconda
