import type { PokemonTemplateSet } from '../../lib/types'

const scyther: PokemonTemplateSet = {
  internalName: 'SCYTHER',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TECHNICIAN',
      item: 'EVIOLITE',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'DUALWINGBEAT', 'CLOSECOMBAT', 'QUICKATTACK'],
      justification:
        'Scyther evoluciona a Scizor y a Kleavor, así que puede equipar Mineral Evolutivo, que le sube Defensa y Def. Esp. un 50% y lo lleva de 80/80 a un volumen de 120/120 con PS 70. Sobre esa base, Ataque 110 y Velocidad 105 hacen un barredor con setup difícil de tumbar. Experto potencia un 50% los movimientos de 60 de potencia o menos: Doble Ala (dos golpes de 40) sube a un STAB volador de mucha potencia que además rompe Banda Aguante, Robustez y sustitutos, y Ataque Rápido (40) se convierte en prioridad de 60 para rematar. Danza Espada aprovecha el volumen del Mineral para preparar con seguridad, y A Bocajarro cubre a Acero, Roca, Hielo y Eléctrico que aguantan la combinación Bicho/Volador. Alegre y máxima Velocidad para superar el tramo de los 100 base; el Mineral aporta la dureza sin gastar EV defensivos.',
      alternatives: [
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Firme cambia el margen de velocidad por más potencia bruta, opción válida si el equipo tiene control de velocidad o si Scyther va a barrer solo tras un debilitamiento previo.'
        },
        {
          slot: 'move',
          value: 'BUGBITE',
          note: 'Picadura recibe el bono de Experto (60 a 90), da STAB de Bicho y consume la baya del rival, cediendo la cobertura amplia de A Bocajarro.',
          replaces: 'CLOSECOMBAT'
        },
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Aterrizaje recupera la mitad de los PS y, junto al Mineral, convierte el set de Danza Espada en una condición de victoria muy longeva, a costa de la prioridad de Ataque Rápido.',
          replaces: 'QUICKATTACK'
        }
      ]
    }
  ]
}

export default scyther
