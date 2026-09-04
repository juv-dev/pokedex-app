import type { PokemonTemplateSet } from '../../lib/types'

const rapidash: PokemonTemplateSet = {
  internalName: 'RAPIDASH',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'viable',
      ability: 'RECKLESS',
      item: 'HEAVYDUTYBOOTS',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'FLAREBLITZ', 'WILDCHARGE', 'HIGHHORSEPOWER'],
      justification:
        'Rapidash en Añil V4.13 tiene Ataque 110 y Velocidad 105, un perfil de barredor con un solo baile de mejora. Danza Espada dobla el Ataque y su Velocidad 105 le deja pasar por delante de la mayoría de la base 100 tras el turno de setup. Audaz sube un 20% la potencia de los movimientos con retroceso, así que Envite Ígneo (120 de potencia, STAB) y Voltio Cruel se benefician directamente; Envite Ígneo es el golpe principal y Voltio Cruel castiga a los tipos Agua y Volador voluminosos que muran al Fuego. Potencia Equina cierra la cobertura contra Roca, Fuego y Acero sin retroceso y con 95 de potencia. La debilidad es la fragilidad (PS 85 / Def 70 / Def. Esp. 80) y el hecho de ser Fuego puro, fácil de frenar con resistencias; por eso queda en viable y no en óptimo. Botas Gruesas es el objeto clave: al ser monotipo Fuego, cada reentrada con Trampa Rocas le quita la mitad de los PS, y sumado al retroceso de sus dos STAB principales eso lo saca de combate en dos o tres turnos. Naturaleza Alegre porque la Velocidad 105 sí es un umbral relevante para ganar carreras de velocidad tras Danza Espada.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera sube todos los golpes un 30% para asegurar más 2HKO tras Danza Espada, a cambio de la inmunidad a Trampa Rocas y de sumar más desgaste al retroceso.'
        },
        {
          slot: 'move',
          value: 'MEGAHORN',
          note: 'Megacuerno (120 de potencia, tipo Bicho) pega a los Psíquico, Siniestro y Planta que aguantan Fuego y Tierra, a cambio de la fiabilidad de Potencia Equina.',
          replaces: 'HIGHHORSEPOWER'
        },
        {
          slot: 'move',
          value: 'MORNINGSUN',
          note: 'Sol Matinal aporta recuperación real y alarga la vida del pivote ofensivo, cediendo el potencial de barrido de Danza Espada.',
          replaces: 'SWORDSDANCE'
        },
        {
          slot: 'ability',
          value: 'FLASHFIRE',
          note: 'Absorbe Fuego convierte a Rapidash en un cambio seguro frente a atacantes de Fuego y potencia sus propios ataques de ese tipo, a cambio del refuerzo de Audaz sobre los movimientos con retroceso.'
        }
      ]
    }
  ]
}

export default rapidash
