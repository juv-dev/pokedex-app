import type { PokemonTemplateSet } from '../../lib/types'

const noctowl: PokemonTemplateSet = {
  internalName: 'NOCTOWL',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TINTEDLENS',
      item: 'HEAVYDUTYBOOTS',
      nature: 'CALM',
      evs: [248, 0, 8, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HURRICANE', 'HYPERVOICE', 'ROOST', 'DEFOG'],
      justification:
        'En Añil V4.13 Noctowl tiene PS 100, Def. Esp. 96 y At. Esp. 95, un pivote especialmente voluminoso que además pega de verdad gracias a Cromolente. Cromolente hace que los movimientos poco eficaces peguen el doble, así que Vendaval nunca es débil: Acero, Eléctrico y Roca reciben daño neutro efectivo. Vozarrón es el segundo STAB estable, Respiro recupera la mitad de los PS y Despejar retira las trampas del campo propio. Botas Gruesas son clave porque el tipo Normal/Volador sufre x2 de Trampa Rocas y este set entra y sale con frecuencia. Naturaleza Serena y reparto en PS y Def. Esp. para maximizar el volumen especial; la Defensa 65 es el flanco flojo, cubierto por Fuego Fatuo de compañeros o por un buen posicionamiento.',
      alternatives: [
        {
          slot: 'move',
          value: 'HEATWAVE',
          note: 'Onda Ígnea castiga a los Acero que aun así prefieren no comer Vendaval, cambio útil si el equipo pierde ante Acero defensivos.',
          replaces: 'HYPERVOICE'
        },
        {
          slot: 'move',
          value: 'MOONBLAST',
          note: 'Fuerza Lunar pega a Siniestro, Dragón y Lucha y baja el At. Esp. rival, otra cara de la cobertura frente a Vozarrón.',
          replaces: 'HYPERVOICE'
        },
        {
          slot: 'ability',
          value: 'INSOMNIA',
          note: 'Insomnio da inmunidad al sueño, valioso contra equipos que dependen de dormir al pivote para abrir hueco.'
        },
        {
          slot: 'move',
          value: 'PSYCHICNOISE',
          note: 'Psicorruido bloquea la recuperación del objetivo durante dos turnos, utilidad anti-stall a costa del segundo STAB.',
          replaces: 'HYPERVOICE'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'TINTEDLENS',
      item: 'HEAVYDUTYBOOTS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'HURRICANE', 'HYPERVOICE', 'HEATWAVE'],
      justification:
        'Uso de rompemuros: con Cromolente y Maquinación (+2) no hay entrada segura contra Noctowl, porque Vendaval pega al menos neutro a todo y Onda Ígnea derrite a los Acero. La Velocidad 70 lo deja fuera del papel de barredor, así que el reparto va a PS y At. Esp. para plantar Maquinación con seguridad y aguantar un golpe. Botas Gruesas mantienen la salud al entrar pese al tipo Volador. Vozarrón añade el STAB Normal fiable para no depender de la precisión de Vendaval. Es un rompemuros que se instala y perfora, no un limpiador de finales.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Respiro cambia una cobertura por longevidad para instalarse más de una vez por partida.',
          replaces: 'HEATWAVE'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera sube el pico de daño tras Maquinación si el equipo ya controla las trampas y no necesita las Botas.'
        },
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Miedosa recupera algo de Velocidad para no depender por completo del volumen, a cambio de potencia de ruptura.'
        }
      ]
    }
  ]
}

export default noctowl
