import type { PokemonTemplateSet } from '../../lib/types'

const haxorus: PokemonTemplateSet = {
  internalName: 'HAXORUS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MOLDBREAKER',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'OUTRAGE', 'EARTHQUAKE', 'CLOSECOMBAT'],
      justification:
        'Ataque 147 es de los más altos del juego, sobre Velocidad 97 que Danza Dragón lleva a territorio de barredor a partir de un solo turno. Rompemoldes es la habilidad de barrido ideal: ignora Levitación, Multiescama, Piel Milagro, Robustez y Manto Piadoso, así que Terremoto alcanza a Rotom, Weezing y compañía, y el turno de setup no lo bloquea una habilidad defensiva. Enfado es la STAB de 120 que define el daño; Terremoto cubre a Acero, Roca, Veneno y Fuego; A Bocajarro remata a Acero y castiga a los Hada por el lado que no esperan. Naturaleza Alegre para asegurar la iniciativa tras la Danza sin depender de más apoyos; Vidasfera para pasar umbrales de OHKO. El precio es la fragilidad defensiva de 76/90/70, que obliga a buscar el turno de entrada con cuidado.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAGONCLAW',
          note: 'STAB sin quedar bloqueado ni confundido, a cambio de 40 de potencia frente a Enfado.',
          replaces: 'OUTRAGE'
        },
        {
          slot: 'move',
          value: 'SCALESHOT',
          note: 'Sube la Velocidad cada golpe (baja la Defensa) y rompe Robustez y Banda Aguante; permite otro objeto ofensivo.',
          replaces: 'DRAGONDANCE'
        },
        {
          slot: 'move',
          value: 'IRONHEAD',
          note: 'Castiga a Hada sin bajar las defensas propias como hace A Bocajarro.',
          replaces: 'CLOSECOMBAT'
        },
        {
          slot: 'item',
          value: 'LUMBERRY',
          note: 'Cura la confusión de Enfado una vez, permitiendo encadenar la STAB sin miedo hasta ese momento.'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'MOLDBREAKER',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['OUTRAGE', 'EARTHQUAKE', 'CLOSECOMBAT', 'POISONJAB'],
      justification:
        'Rompemuros inmediato sin depender de Danza Dragón. Cinta Elección sobre Ataque 147 y con Rompemoldes ignorando habilidades defensivas produce daños que perforan resistencias de un golpe. Enfado es la STAB principal, Terremoto y A Bocajarro cubren a Acero y Roca, y Puntada Tóxica castiga a Hada, la respuesta habitual a un Dragón bloqueado en Enfado. Naturaleza Firme con máxima Velocidad para conservar los 97 base, que aún dejan a Haxorus por delante de buena parte del tier defensivo. Menos fiable como cierre de partida que la variante de Danza Dragón, de ahí su confianza inferior.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAGONCLAW',
          note: 'Evita quedar bloqueado y confundido tras Enfado, a costa de potencia.',
          replaces: 'OUTRAGE'
        }
      ]
    }
  ]
}

export default haxorus
