import type { PokemonTemplateSet } from '../../lib/types'

const kommoo: PokemonTemplateSet = {
  internalName: 'KOMMOO',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BULLETPROOF',
      item: 'THROATSPRAY',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CLANGOROUSSOUL', 'BOOMBURST', 'CLANGINGSCALES', 'DRAINPUNCH'],
      justification:
        'El perfil 75/110/125/100/105/85 con tipos Dragón/Lucha convierte a Kommo-o en un set-up voluminoso, y Estruendo Escama es el motor: sube todas las características principales un nivel a costa de un tercio de los PS. Como Estruendo Escama es un movimiento sonoro, Espray Bucal se activa en el mismo turno y añade otro nivel de At. Esp., dejando a Kommo-o con +1 en todo y +2 efectivos de At. Esp. en un solo turno. Estruendo (140, sonoro) es el golpe de cierre neutral contra casi todo el metagame; Fragor Escamas (110, STAB Dragón) cubre el lado que Estruendo no toca, y Puño Drenaje (75, cura la mitad del daño) recupera el tercio de PS que costó el set-up mientras castiga a Acero, Roca y Siniestro. Modesta con inversión en PS y At. Esp.: el +1 de Velocidad que regala Estruendo Escama ya supera a los Pokémon de Velocidad 100 con inversión neutra, y el PS alto hace que el coste de un tercio deje margen para el Puño Drenaje. Antibalas bloquea los movimientos de bola y bomba que atacan su debilidad a Veneno: Bomba Lodo, Onda Certera y Bola Sombra pasan de largo.',
      alternatives: [
        {
          slot: 'move',
          value: 'FLASHCANNON',
          note: 'Cañón Resplandor (80, STAB Acero) pega 2x a las Hadas que resisten Lucha y son inmunes a Dragón, cediendo el daño neutral masivo de Estruendo.',
          replaces: 'BOOMBURST'
        },
        {
          slot: 'ability',
          value: 'SOUNDPROOF',
          note: 'Insonorizar blinda a Kommo-o de Estruendo, Fragor Escamas e Hipervoz rivales, pero la plantilla usa su propio arsenal sonoro: Antibalas es el mejor encaje.'
        },
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Sustituto protege el set-up de estados y de un golpe crítico, a cambio de la recuperación de Puño Drenaje.',
          replaces: 'DRAINPUNCH'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BULLETPROOF',
      item: 'SITRUSBERRY',
      nature: 'ADAMANT',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BELLYDRUM', 'DRAINPUNCH', 'POISONJAB', 'ICEPUNCH'],
      justification:
        'Variante física de Tambor: el movimiento sube el Ataque al máximo a costa de la mitad de los PS y Baya Zidra recupera de inmediato parte del coste, dejando a Kommo-o en ~70% de PS con +6 de Ataque. Con 110 de Ataque base, el +6 es tan desproporcionado que la inversión ofensiva sobra: por eso el reparto va a PS y Velocidad con Firme, y los 269 de Velocidad (85 base con EV) permiten golpear primero a la mayoría de los tanques. Puño Drenaje es la recuperación sostenida tras el set-up, Puya Nociva pega 2x a las Hadas que inmunizan Lucha y Puño Hielo cubre a Dragón, Tierra y Volador. Es viable y no óptima porque Tambor exige entrar con el rival en rango o quedar predicible: Estruendo Escama consigue el mismo efecto de partida sin pedir la mitad de los PS.',
      alternatives: [
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Terremoto (100) cubre a Veneno, Fuego y Acero en un solo espacio, cediendo el 10% de congelar de Puño Hielo.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'A Bocajarro (120) da más pico de daño que Puño Drenaje, pero sin recuperación y bajando las defensas propias.',
          replaces: 'DRAINPUNCH'
        }
      ]
    }
  ]
}

export default kommoo