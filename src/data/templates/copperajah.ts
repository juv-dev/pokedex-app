import type { PokemonTemplateSet } from '../../lib/types'

const copperajah: PokemonTemplateSet = {
  internalName: 'COPPERAJAH',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHEERFORCE',
      item: 'CHOICEBAND',
      nature: 'BRAVE',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['HEAVYSLAM', 'EARTHQUAKE', 'PLAYROUGH', 'STEELROLLER'],
      justification:
        'Copperajah en Añil V4.13 tiene PS 122 y Ataque 130 con la Defensa 69 baja para un Acero y Velocidad 30. Su nicho de Añil es el rompemuros físico de Espacio Raro: en zona, su velocidad mínima ataca primero y su volumen 122/69 aguanta intercambios. Potencia Bruta sube un 30% el daño y anula los efectos secundarios, por eso encaja con su firma Allanador Férreo, un STAB Acero de 130 de potencia que solo funciona si hay campo activo (y al usarlo lo elimina): Potencia Bruta lo hace castigar a casi cualquier parada física. Cuerpo Pesado (STAB Acero seguro, escala con su peso enorme) y Terremoto forman la doble cobertura Acero/Tierra, y Carantoña cubre a los Luchadores que resisten Acero. Naturaleza Audaz (Ataque +, Velocidad -) con IV 0 de Velocidad es la clave del Espacio Raro; la Cinta Elección maximiza el 130 base. Su Defensa 69 especial-lo convierte en un golpeador de golpe seguro que reparte tras la zona.',
      alternatives: [
        {
          slot: 'ability',
          value: 'HEAVYMETAL',
          note: 'Metal Pesado duplica el peso, fortaleciendo Cuerpo Pesado y Golpe Calor contra rivales pesados, sin el 30% de daño de Potencia Bruta.'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos sostienen a un tanque fuera de Espacio Raro, liberando la Cinta para entrar varias veces con PS 122.'
        },
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas da utilidad de entrada cuando el equipo necesita la trampa, cediendo el golpe de Carantoña.'
        }
      ]
    }
  ]
}

export default copperajah