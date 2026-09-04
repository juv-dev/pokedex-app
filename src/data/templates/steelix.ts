import type { PokemonTemplateSet } from '../../lib/types'

const steelix: PokemonTemplateSet = {
  internalName: 'STEELIX',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STURDY',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'EARTHQUAKE', 'BODYPRESS', 'ROAR'],
      justification:
        'Defensa 200 con PS 75 es una de las murallas físicas más altas del juego; Ataque 100 en Añil (subido respecto al original) y Velocidad 30 confirman que su función es colocar Trampa Rocas y absorber físicos, no atacar por iniciativa. Robustez garantiza sobrevivir a un golpe supereficaz a PS máximos para dejar la trampa. Terremoto es el STAB fiable, y Fuerza Bruta escala con esa Defensa 200 en lugar del Ataque, dando un segundo golpe real de tipo lucha contra Acero, Roca, Hielo y Normal. Rugido fuerza cambios y acumula daño de Trampa Rocas además de arruinar setups. El tipo Acero/Tierra le da inmunidad a Veneno y Eléctrico y resistencias a Normal, Volador, Roca, Bicho, Acero, Dragón, Hada y Fuego; sus grietas son Agua, Planta y Lucha. Restos compensa la falta de recuperación instantánea.',
      alternatives: [
        {
          slot: 'move',
          value: 'HEAVYSLAM',
          note: 'Cuerpo Pesado aprovecha el enorme peso de Steelix para pegar fuerte a Hada y Hielo, a cambio del phazeo de Rugido.',
          replaces: 'ROAR'
        },
        {
          slot: 'ability',
          value: 'SHEERFORCE',
          note: 'Potencia Bruta vira a un uso ofensivo con Vidasfera (Terremoto / Colmillo Ígneo / Roca Afilada / Triturar), potenciando los ataques con efecto secundario un 30% sin retroceso de Vidasfera; renuncia por completo al muro.'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga a los físicos de contacto que buscan romperlo, a cambio de la cura pasiva de Restos.'
        }
      ]
    }
  ]
}

export default steelix
