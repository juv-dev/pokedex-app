import type { PokemonTemplateSet } from '../../lib/types'

const melmetal: PokemonTemplateSet = {
  internalName: 'MELMETAL',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'IRONFIST',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DOUBLEIRONBASH', 'EARTHQUAKE', 'ICEPUNCH', 'THUNDERPUNCH'],
      justification:
        'Melmetal en Añil V4.13 es un muro ofensivo de manual: PS 135 y Defensa 143 con Ataque 143 y Velocidad 80, un perfil que no corre pero que recibe golpes físicos como nadie mientras destruye. Ferropuño Doble (60 x2 golpes, STAB Acero, amedrenta) recibe el 20% de Puño Férreo por ser un puñetazo: cada golpe pasa a 72 de potencia, 144 efectivas con doble oportunidad de amedrentar, y con Cinta Elección el conjunto se vuelve un mazazo de 216 efectivas. Terremoto cubre Acero, Eléctrico y Roca; Puño Hielo y Puño Trueno, ambos potenciados por Puño Férreo (75 x1,2 = 90), rematan la cobertura contra Tierra, Dragón, Volador y Agua. Firme con reparto 252 PS / 252 At. maximiza la potencia sin sacrificar el volumen que le permite entrar varias veces: la Velocidad 80 no es negociable y no se invierte en ella.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUPERPOWER',
          note: 'Fuerza Bruta (120, STAB Lucha) supera a muros de tipo Normal y Acero como Ferrothorn o Tyranitar, a costa de bajar Ataque y Defensa al usarlo.',
          replaces: 'THUNDERPUNCH'
        },
        {
          slot: 'move',
          value: 'DARKESTLARIAT',
          note: 'Lariat Oscuro pega supereficaz a Fantasma y Psíquico, cediendo la cobertura de Agua y Volador de Puño Trueno.',
          replaces: 'THUNDERPUNCH'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Chaleco Asalto es la variante del segundo set: más volumen especial a cambio del pico de la Cinta.'
        }
      ]
    },
    {
      role: 'bulky-attacker',
      isPrimary: false,
      confidence: 'viable',
      ability: 'IRONFIST',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DOUBLEIRONBASH', 'EARTHQUAKE', 'ICEPUNCH', 'DARKESTLARIAT'],
      justification:
        'La Defensa Especial 34 es el agujero real del perfil, y Chaleco Asalto lo parcha con un 50% de Def.Esp. efectiva sin costar un turno: con PS 135, Melmetal pasa a absorber golpes especiales que de otro modo lo tumban en dos turnos. El set mantiene Ferropuño Doble como núcleo potenciado por Puño Férreo y añade Lariat Oscuro en la cuarta ranura para no quedar bloqueado contra Fantasma y Psíquico, algo que el set de Cinta no puede responder. Sigue siendo Firme con 252 PS / 252 At. porque el rol es el mismo atacante voluminoso: aguantar el golpe del rival y devolver daño constante. Es viable y no óptimo porque renuncia al pico de daño de la Cinta Elección, la forma más eficiente de explotar Ataque 143, aunque gana en flexibilidad de movimientos y en supervivencia especial.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERPUNCH',
          note: 'Puño Trueno recupera la cobertura de Agua y Volador potenciada por Puño Férreo, a costa del golpe a Fantasma de Lariat Oscuro.',
          replaces: 'DARKESTLARIAT'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos dan recuperación pasiva y permiten usar Descanso como clérigo del equipo, renunciando al 50% de Def.Esp. del Chaleco.'
        }
      ]
    }
  ]
}

export default melmetal