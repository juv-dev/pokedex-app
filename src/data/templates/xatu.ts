import type { PokemonTemplateSet } from '../../lib/types'

const xatu: PokemonTemplateSet = {
  internalName: 'XATU',
  templates: [
    {
      role: 'hazard-removal',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MAGICBOUNCE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PSYCHIC', 'ROOST', 'DEFOG', 'UTURN'],
      justification:
        'El perfil 65/70/70 con Velocidad 100 no aguanta mucho, pero Espejo Mágico convierte a Xatu en el mejor control de trampas defensivo de su franja: devuelve al emisor Trampa Rocas, Púas, Toxispikes, Mofa, Paralizador y Polvo Veneno sin recibirlos. Defensa limpia lo que un rival más rápido o un compañero del rival ya haya colocado, Respiro le devuelve la mitad de los PS para repetir el ciclo y Ida y Vuelta mantiene el ritmo cediendo el turno con ventaja. Psíquico es el STAB que evita ser un cero ofensivo. Botas Gruesas son obligatorias porque el tipo Volador sufre daño doble de Trampa Rocas y un reciclador que reentra sin parar no puede pagar ese peaje. Naturaleza Miedosa y máxima Velocidad para usar Defensa o Ida y Vuelta antes que la mayoría de colocadores.',
      alternatives: [
        {
          slot: 'move',
          value: 'HEATWAVE',
          note: 'Viento Ígneo castiga a los Acero y Bicho que entran gratis a bloquear la Defensa, a cambio del momentum de Ida y Vuelta.',
          replaces: 'UTURN'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno aporta control de velocidad para el equipo si otro compañero ya se encarga de las trampas.',
          replaces: 'DEFOG'
        },
        {
          slot: 'move',
          value: 'CALMMIND',
          note: 'Paz Mental transforma a Xatu en un wincon lento apoyado en Espejo Mágico y Respiro, renunciando a la utilidad de Defensa.',
          replaces: 'DEFOG'
        }
      ]
    }
  ]
}

export default xatu
