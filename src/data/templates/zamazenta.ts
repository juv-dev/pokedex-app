import type { PokemonTemplateSet } from '../../lib/types'

const zamazenta: PokemonTemplateSet = {
  internalName: 'ZAMAZENTA',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DAUNTLESSSHIELD',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CLOSECOMBAT', 'STONEEDGE', 'IRONHEAD', 'CRUNCH'],
      justification:
        'Zamazenta en Añil V4.13 es de tipo Lucha puro: el acero de su forma coronada no existe en este metajuego y su única habilidad, Escudo Recio, sube un nivel su Defensa (115 base) cada vez que entra, lo que le da el volumen para aguantar un golpe físico mientras despliega sus 120 de Ataque y 138 de Velocidad base. A Bocajarro (120, STAB) es el golpe principal; Roca Afilada revienta a los Volador que resisten Lucha como Corviknight o Moltres; Cabeza de Hierro golpea a las Hada que reducen a la mitad el tipo Lucha; y Triturar cubre a los Fantasma y Psíquico. Vidasfera potencia cada golpe un 30% a cambio de PS, costo que la velocidad del set mitiga al no tomar golpes de respuesta. Alegre eleva la Velocidad a 407 efectivos, por delante de la mayoría del metajuego sin potenciar; solo los velocistas por encima de 140 de base con naturaleza positiva lo superan, y contra ellos juega el +1 de Escudo Recio y los 92 PS / 115 de ambas defensas.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección lleva el pico de daño de A Bocajarro más arriba, a costa de quedar bloqueado en un solo tipo de movimiento por turno.'
        },
        {
          slot: 'move',
          value: 'TRAILBLAZE',
          note: 'Abrecaminos sube la Velocidad un nivel al golpear y convierte a Zamazenta en un sweep de fin de partida, cediendo el golpe limpio a los Volador.',
          replaces: 'STONEEDGE'
        }
      ]
    },
    {
      role: 'wall-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'DAUNTLESSSHIELD',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['IRONDEFENSE', 'BODYPRESS', 'CRUNCH', 'TOXIC'],
      justification:
        'Variante defensiva que explota el +1 de Escudo Recio sobre los 115 de Defensa base: Defensa Férrea sube la Defensa dos niveles más y Plancha Corporal (80) usa esa estadística en lugar del Ataque, de modo que cada mejora defensiva también aumenta el daño. Triturar mantiene cobertura Siniestra contra Fantasma y Psíquico y Tóxico desgasta a los muros que este set no puede derribar por golpes. Los 138 de Velocidad base le permiten colocar Tóxico o Defensa Férrea antes de que actúen casi todos los rivales, y Restos compensan la ausencia de recuperación directa. Es viable y no óptimo porque renuncia a los 120 de Ataque, que son la identidad ofensiva de la especie en su tipo Lucha puro.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROAR',
          note: 'Remolino obliga a cambiar al rival y rompe acumuladores de mejora, cediendo la cobertura ofensiva de Triturar.',
          replaces: 'CRUNCH'
        }
      ]
    }
  ]
}

export default zamazenta