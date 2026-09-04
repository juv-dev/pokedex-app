import type { PokemonTemplateSet } from '../../lib/types'

const forretress: PokemonTemplateSet = {
  internalName: 'FORRETRESS',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STURDY',
      item: 'LEFTOVERS',
      nature: 'RELAXED',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['STEALTHROCK', 'SPIKES', 'RAPIDSPIN', 'VOLTSWITCH'],
      justification:
        'El perfil manda: Defensa 200 con PS 75 y Def.Esp 60, Ataque 90 y Velocidad 40 lo sacan de cualquier plan ofensivo y lo dejan como colocador y limpiador de trampas puro. Robustez le garantiza sobrevivir con 1 PS a un golpe a PS máximos, así que aun contra un rival que lo supera puede dejar al menos una capa. Trampa Rocas y Púas cubren las dos trampas que más importan; Giro Rápido limpia las del propio campo y con potencia 50 no queda bloqueado por Fantasmas del modo que sí lo estaría Defensa por Mofa. Voltiocambio cede el turno a un compañero con ventaja y evita que Forretress regale momentum por su lentitud. El tipo Bicho/Acero resiste una lista enorme (Hada, Psíquico, Planta, Hielo, Roca, Dragón, Normal, Veneno, Bicho, Acero) y solo teme a Fuego 4x, por lo que entra a resistidas y no a ataques de fuego. Restos compensa la falta de recuperación fiable. IV de Velocidad 0 con naturaleza Plácida para que Voltiocambio salga lento y para maximizar Giro Ball si se toma como alternativa.',
      alternatives: [
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Ataque real que escala con la Defensa 200 y pega a Acero, Roca, Siniestro y Normal; se cambia por Voltiocambio si el equipo no necesita el pivoteo.',
          replaces: 'VOLTSWITCH'
        },
        {
          slot: 'move',
          value: 'GYROBALL',
          note: 'Con IV de Velocidad 0 castiga duro a los rivales rápidos y frágiles; entra a costa de una de las dos trampas cuando el equipo ya tiene la otra cubierta.',
          replaces: 'SPIKES'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga cada golpe de contacto y ayuda contra atacantes físicos que buscan romperlo, a cambio de la cura pasiva de Restos.'
        }
      ]
    }
  ]
}

export default forretress
