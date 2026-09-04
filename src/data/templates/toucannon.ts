import type { PokemonTemplateSet } from '../../lib/types'

const toucannon: PokemonTemplateSet = {
  internalName: 'TOUCANNON',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SKILLLINK',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['ROCKBLAST', 'BULLETSEED', 'BRAVEBIRD', 'GUNKSHOT'],
      justification:
        'Toucannon tiene Ataque 120 y la habilidad Encadenado, que ejecuta siempre el máximo de golpes de los movimientos múltiples. Eso convierte Pedrada, de 25 por golpe, en un golpe Roca efectivo de 125 de potencia garantizado que castiga a Volador, Hielo, Bicho y Fuego, y Semilladora (25) en 125 de tipo Planta contra Agua, Roca y Tierra: dos coberturas de alto poder sin el riesgo de fallo por número de golpes. Pájaro Osado (120, STAB Volador) y Lanzamugre (120, con 30% de veneno) completan la cobertura. La Cinta Elección maximiza el Ataque ya alto y Toucannon entra y sale con Ida y Vuelta en el repertorio legal para no quedar bloqueado de forma permanente. Reparto 252 Ataque / 252 PS con Firme: la Velocidad 60 no da para barrer, así que el rol es romper muros a golpe de cambio, aprovechando el volumen decente para aguantar una entrada.',
      alternatives: [
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Chaleco Asalto refuerza el flanco especial (Def.Esp 75) al ser un set 100% ofensivo, a cambio del pico de daño de la Cinta Elección.'
        },
        {
          slot: 'move',
          value: 'FLAMECHARGE',
          note: 'Nitrocarga sube Velocidad +1 al golpear para mitigar la Velocidad 60; inviable con Cinta Elección pero útil en un set de Restos con Danza Espada.',
          replaces: 'GUNKSHOT'
        }
      ]
    }
  ]
}

export default toucannon
