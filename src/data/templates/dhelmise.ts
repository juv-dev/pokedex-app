import type { PokemonTemplateSet } from '../../lib/types'

const dhelmise: PokemonTemplateSet = {
  internalName: 'DHELMISE',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STEELWORKER',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['POWERWHIP', 'ANCHORSHOT', 'KNOCKOFF', 'EARTHQUAKE'],
      justification:
        'Dhelmise en Añil V4.13 tiene Ataque 131, Defensa 100 y un perfil claramente de rompemuros físico lento, con la habilidad Trabajador de Acero que "potencia los movimientos de tipo Acero del usuario en un 50%". Látigo Mega (120, STAB Planta) es su golpe de cierre contra Agua, Roca y Tierra; Ancla Bajada (80, STAB Acero) con el multiplicador de la habilidad pasa a pegar como un golpe de 120 y además atrapa al rival, que no puede cambiar, casándose perfecto con la función de rompemuros: entra, atrapa y rompe. Desarme quita objetos a los muros y Terremoto (100) cubre a los Acero, Veneno y Eléctrico que resisten Planta. Cinta Elección maximiza el pico de daño y no hace falta mover de golpe porque la Velocidad 40 no da para barrer; PS 70 / Def 100 le permiten entrar varias veces a cambio. Firme y 252 en Ataque con 252 en PS compensan el golpe de entrada.',
      alternatives: [
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Chaleco Asalto eleva la Def. Esp. 90 para un estilo de tanque que aguanta especiales y devuelve daño, sin quedar bloqueado en un movimiento.'
        },
        {
          slot: 'move',
          value: 'POLTERGEIST',
          note: 'Poltergeist (110, STAB Fantasma) castiga a Fantasma y Psíquico que resisten Planta con más potencia que Desarme, a costa de fallar si el rival no lleva objeto.'
        }
      ]
    }
  ]
}

export default dhelmise
