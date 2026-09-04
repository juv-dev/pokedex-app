import type { PokemonTemplateSet } from '../../lib/types'

const arbok: PokemonTemplateSet = {
  internalName: 'ARBOK',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INTIMIDATE',
      item: 'LEFTOVERS',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['COIL', 'GUNKSHOT', 'CRUNCH', 'EARTHQUAKE'],
      justification:
        'Arbok en Añil V4.13 tiene Ataque 95, Velocidad 95 y volumen 70 / 69 / 79, y su tipo Veneno/Siniestro solo es débil a Tierra: un perfil hecho para montarse un impulso. Intimidación baja el Ataque del rival al entrar, lo que abre el turno de Enrosque de forma fiable frente a un físico. Enrosque ("aumenta el Ataque, la Defensa y la Precisión") es la clave del set: sube el daño, refuerza el lado físico ya de por sí decente y, sobre todo, arregla el 90 de precisión de Lanza Mugre —tras un Enrosque, ese STAB de 120 pasa a ser un golpe de confianza—. Triturar (80, STAB) es el segundo ataque fiable y baja Defensa; Terremoto cubre a Acero, Roca y Veneno rivales que aguantan los dos STAB. Restos da la recuperación que el repertorio no ofrece. Alegre y máxima Velocidad porque Enrosque no sube Velocidad: hay que llegar al tramo 95 antes del impulso para que el barrido tenga sentido.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUCKERPUNCH',
          note: 'Golpe Bajo (70, prioridad +1) remata a revenge killers rápidos que de otra forma cortan el barrido, a cambio de la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'ability',
          value: 'MERCILESS',
          note: 'Despiadado ("asesta siempre golpe crítico si el rival está envenenado") con Colmillo Veneno en el hueco de cobertura convierte cada ataque posterior en crítico garantizado; se pierde la ayuda de Intimidación para montar el setup.'
        },
        {
          slot: 'move',
          value: 'GLARE',
          note: 'Deslumbrar (parálisis, ignora inmunidades de tipo) apoya al equipo y frena a un rival más rápido antes de empezar a subir.',
          replaces: 'CRUNCH'
        }
      ]
    }
  ]
}

export default arbok
