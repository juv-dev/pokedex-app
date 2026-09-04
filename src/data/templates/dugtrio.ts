import type { PokemonTemplateSet } from '../../lib/types'

const dugtrio: PokemonTemplateSet = {
  internalName: 'DUGTRIO',
  templates: [
    {
      role: 'revenge-killer',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ARENATRAP',
      item: 'CHOICEBAND',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'STONEEDGE', 'SUCKERPUNCH', 'REVERSAL'],
      justification:
        'El único motivo por el que Dugtrio merece una plantilla es Trampa Arena, que impide huir o cambiar a cualquier rival que no sea de tipo Volador, no levite ni sea Fantasma. Con Velocidad 120, una de las más altas del juego, Dugtrio entra, atrapa a una amenaza concreta y la elimina antes de que actúe. El Ataque 100 no rompe muros por sí solo, así que Cinta Elección es obligatoria para convertir al atrapado en un KO real. Terremoto es el STAB que cubre a la mayoría de objetivos que Dugtrio quiere cazar: Acero, Fuego, Eléctrico y Veneno. Roca Afilada castiga a Fuego y Volador que resisten Tierra, como Charizard o Volcarona, que de otro modo escaparían del STAB. Puño Certero, con prioridad +1, remata a barredores debilitados más rápidos que quedan encerrados por la habilidad. Sobrepensar es el recurso a media vida: Dugtrio es muy frágil, con PS 65 y Def 70, y casi siempre actúa dañado, momento en el que un golpe de tipo Lucha cuya potencia sube al bajar sus PS le permite retirar muros especiales de tipo Normal, Roca, Acero o Hielo que aguantan el resto del set. Naturaleza Alegre porque perder la Velocidad 120 anula toda la estrategia.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo Elección convierte a Dugtrio en un revenge killer puro que supera incluso a rivales con mejora de Velocidad y a otros con Pañuelo, a cambio de la potencia de KO sobre el objetivo atrapado.'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante garantiza que Dugtrio sobreviva un golpe para atrapar y eliminar una vez a una amenaza más rápida o más fuerte, renunciando al aumento de daño de Cinta.'
        },
        {
          slot: 'move',
          value: 'AERIALACE',
          note: 'Golpe Aéreo da cobertura constante contra Lucha, Planta y Bicho como Breloom o Amoonguss sin depender de tener pocos PS.',
          replaces: 'REVERSAL'
        }
      ]
    }
  ]
}

export default dugtrio
