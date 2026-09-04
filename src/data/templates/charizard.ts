import type { PokemonTemplateSet } from '../../lib/types'

const charizard: PokemonTemplateSet = {
  internalName: 'CHARIZARD',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BLAZE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FIREBLAST', 'AIRSLASH', 'FOCUSBLAST', 'ROOST'],
      justification:
        'Charizard base en Añil V4.13 tiene At.Esp 109 y Velocidad 100, sin acceso a ningún baile de mejora especial (Impulso solo sube un nivel el Ataque y el Ataque Especial y no compensa), así que su función es la de rompemuros especial que fuerza cambios con STAB potente y se sostiene con Recuperación, no la de barredor. El tipo Fuego/Volador arrastra una debilidad 4x a Trampa Rocas: Botas Gruesas no es una opción de comodidad sino el requisito para poder reentrar, porque cada pisada sin objeto le quita la mitad de los PS. Llamarada (110, STAB) es el golpe principal; Tajo Aéreo (80, STAB, 95 de precisión y 30% de retroceso) es el segundo STAB fiable, más seguro que Vendaval con 70 de precisión sin lluvia; Onda Certera (120, tipo Lucha) cubre a Roca, Acero y Normal que aguantan el STAB de Fuego. Recuperación mantiene a Charizard entrando varias veces durante la partida. Mar Llamas potencia Fuego un 50% por debajo de 1/3 de PS y da un pico real de daño en la fase final. Reparto máximo en At.Esp. y Velocidad con Miedosa para usar el tramo 100 y golpear antes que el metajuego base 100 tras un empate de naturaleza.',
      alternatives: [
        {
          slot: 'move',
          value: 'FLAMETHROWER',
          note: 'Lanzallamas (90, 100 de precisión) cambia potencia por fiabilidad si el equipo no puede permitirse el fallo de Llamarada.',
          replaces: 'FIREBLAST'
        },
        {
          slot: 'ability',
          value: 'SOLARPOWER',
          note: 'Poder Solar sube el At.Esp. un 50% con sol pero resta 1/8 de PS por turno; solo compensa en un equipo con invocador de sol dedicado.'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección da un pico de rotura inmediato asumiendo el bloqueo de movimiento; sacrifica Recuperación y expone la debilidad 4x sin Botas.'
        },
        {
          slot: 'move',
          value: 'DRAGONPULSE',
          note: 'Pulso Dragón golpea limpio a otros Dragones y a Fuego enemigos que resisten los dos STAB.',
          replaces: 'FOCUSBLAST'
        }
      ]
    }
  ]
}

export default charizard
