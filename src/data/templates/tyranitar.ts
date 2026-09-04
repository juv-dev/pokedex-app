import type { PokemonTemplateSet } from '../../lib/types'

const tyranitar: PokemonTemplateSet = {
  internalName: 'TYRANITAR',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SANDSTREAM',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'KNOCKOFF', 'STONEEDGE', 'EARTHQUAKE'],
      justification:
        'Chorro Arena invoca tormenta de arena al entrar, y la arena sube un 50% la Def. Esp. de los Pokémon de tipo Roca: sobre PS 100 / Def 110 / Def. Esp. 100 de base, ese bono deja a Tyranitar aguantando ambos flancos sin necesitar Chaleco Asalto. Reparto en PS y Def. Esp. con Cauta para maximizar el lado que la arena ya potencia y convertirlo en un muro mixto que además arma el clima del equipo. Trampa Rocas es el trabajo de utilidad que justifica traerlo turno tras turno. Desarme (65, quita el objeto) castiga a cualquier muro o pivote que entre y arruina a los que dependen de Restos o Mineral Evolutivo. Roca Afilada es el STAB potente y Terremoto cubre a los Acero y Fuego que resisten Roca. Restos sostiene los PS mientras la arena desgasta a todo lo que no sea Roca, Tierra o Acero.',
      alternatives: [
        {
          slot: 'nature',
          value: 'IMPISH',
          note: 'Agitada mueve la inversión al flanco físico si el equipo ya tiene esponja especial y Tyranitar necesita frenar rompemuros físicos.'
        },
        {
          slot: 'move',
          value: 'ROCKSLIDE',
          note: 'Avalancha cede 20 de potencia por 15 puntos de precisión y evita fallar Roca Afilada en un turno clave.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Plancha Corporal usa la Defensa 110 para pegar y da un ataque de Lucha fiable contra Acero y Normal, cediendo la cobertura de Tierra.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga a los atacantes de contacto que buscan romperlo por el flanco físico, a cambio de la cura pasiva de Restos.'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SANDSTREAM',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STONEEDGE', 'CRUNCH', 'EARTHQUAKE', 'ICEPUNCH'],
      justification:
        'Uso ofensivo: Ataque 134 más Cinta Elección convierte a Tyranitar en un rompemuros inmediato que aprovecha la arena para no depender de compañeros que la coloquen. Roca Afilada y Triturar son el doble STAB, Terremoto castiga a Acero y Fuego, y Puño Hielo pega a los Tierra, Vuelo y Dragón que entrarían impunes a las otras tres. Firme maximiza el poder porque la Velocidad 61 no compite por el tier ofensivo aunque se invierta; los 252 en Velocidad solo sirven para adelantar a otros Pokémon lentos y a la base defensiva. Es "viable" y no "óptimo" porque quedar bloqueado en un movimiento con esa Velocidad lo hace explotable por cambios, y el rol de muro con clima le aporta más al equipo a lo largo de la partida.',
      alternatives: [
        {
          slot: 'move',
          value: 'FIREPUNCH',
          note: 'Puño Fuego cambia la cobertura hacia Acero como Ferrothorn, Scizor o Forretress y Planta, cediendo el golpe a los Dragón y Tierra.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo Elección lo transforma en revenge killer que revienta amenazas debilitadas y aprovecha que la arena ya está puesta.'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre para ganar carreras de velocidad contra la base 60-70 a costa de perder el pico de daño de Firme.'
        }
      ]
    }
  ]
}

export default tyranitar
