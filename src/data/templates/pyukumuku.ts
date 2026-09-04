import type { PokemonTemplateSet } from '../../lib/types'

const pyukumuku: PokemonTemplateSet = {
  internalName: 'PYUKUMUKU',
  templates: [
    {
      role: 'stall',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'UNAWARE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TOXIC', 'RECOVER', 'SOAK', 'PROTECT'],
      justification:
        'Pyukumuku en Añil V4.13 tiene Defensa 130, Def. Esp. 130 y el rol de stall más claro del rango: Ignorante ("ignora los cambios tanto positivos como negativos en las características del rival al atacar, salvo la Velocidad") hace que todos los set-up rivales —Danza Espada, Paz Mental, Corpulencia— sean irrelevantes porque no alteran el daño que le hacen, y con Velocidad 5 no paga nada por su poca velocidad. Remojo cambia el tipo del rival a Agua, lo que permite que Tóxico (veneno malo) infecte a los tipos Veneno y Acero que normalmente serían inmunes. Recuperación (Recover) restaura la mitad de los PS y Protección patina turnos mientras el veneno drena. PS 55 es bajo, pero las defensas 130/130 con Restos y la inmunidad a boosts de Ignorante lo convierten en un ancla defensiva real contra barredores. Osada y reparto en PS y Defensa maximizan el flanco físico, que es por donde más presión recibe pese a la corrección.',
      alternatives: [
        {
          slot: 'ability',
          value: 'INNARDSOUT',
          note: 'Función de sacrificio: al caer, inflige al rival el daño equivalente a sus PS restantes, útil en equipos de sustitución.'
        },
        {
          slot: 'move',
          value: 'PURIFY',
          note: 'Depurar cura los estados del rival y restaura la mitad de los PS de Pyukumuku, una recuperación defensiva alternativa al hueco de Protección.'
        },
        {
          slot: 'move',
          value: 'MEMENTO',
          note: 'Memento debilita At. y At. Esp. del rival al caer, un remate de stall que cede la función de limpieza de Remojo.'
        }
      ]
    }
  ]
}

export default pyukumuku
