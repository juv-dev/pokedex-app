import type { PokemonTemplateSet } from '../../lib/types'

const accelgor: PokemonTemplateSet = {
  internalName: 'ACCELGOR',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'UNBURDEN',
      item: 'FOCUSSASH',
      nature: 'TIMID',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPIKES', 'TOXICSPIKES', 'ENCORE', 'FINALGAMBIT'],
      justification:
        'Con Velocidad base 145 casi nada le gana la iniciativa en el turno 1, y su ofensiva y su físico (80/40/60) no dan para más que un lead descartable. El plan es maximizar el valor de ese primer turno: Banda Aguante garantiza sobrevivir al primer golpe y colocar una capa de trampa, y el reparto de PS al máximo cumple dos funciones a la vez, engordar el impacto de Sacrificio (daño igual a los PS perdidos por el usuario) y aguantar mejor si la Banda no llega a activarse. Púas y Púas Tóxicas montan el chip pasivo; Otra Vez castiga al rival que intenta usarlo de cambio para preparar mejoras; Sacrificio cierra la actuación llevándose por delante a un muro o a una amenaza clave. Liviano es el mejor complemento defensivo disponible: cuando la Banda Aguante se consume, la habilidad duplica la Velocidad y regala un turno extra de trampa o de Sacrificio antes de caer. Hidratación solo sirve bajo lluvia y Piel Seca no aporta a un suicida.',
      alternatives: [
        {
          slot: 'move',
          value: 'BUGBUZZ',
          note: 'Cambia la segunda capa de trampa por una salida ofensiva real si el equipo ya tiene otro colocador.',
          replaces: 'TOXICSPIKES'
        },
        {
          slot: 'move',
          value: 'YAWN',
          note: 'Fuerza el cambio del rival y suma otra capa de trampa, a costa del bloqueo inmediato de Otra Vez.',
          replaces: 'ENCORE'
        },
        {
          slot: 'ability',
          value: 'HYDRATION',
          note: 'Solo para equipos de lluvia: cura el estado alterado al final del turno mientras el clima esté activo.'
        }
      ]
    }
  ]
}

export default accelgor
