import type { PokemonTemplateSet } from '../../lib/types'

const scizor: PokemonTemplateSet = {
  internalName: 'SCIZOR',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TECHNICIAN',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'BULLETPUNCH', 'CLOSECOMBAT', 'BUGBITE'],
      justification:
        'Ataque base 130 con Velocidad 65 define el molde: no barre por velocidad, barre por prioridad, así que la inversión va a PS y Ataque en lugar de a Velocidad. Experto multiplica x1,5 todo movimiento de 60 de potencia o menos, así que Puños Cometa (40, prioridad +1) sube a 60 efectivos y con STAB pega como un movimiento de 90 con prioridad, y Picadura (60) sube a 90 con STAB y encima roba la baya del rival. Danza Espada dobla el Ataque y deja a Scizor cerrando la partida a golpe de prioridad sin depender de la Velocidad. A Puño Dinámico se le prefiere Close Combat (120, lucha) como cobertura para Acero, Roca, Normal y Siniestro, que resisten o aguantan el STAB Bicho/Acero. Vidasfera porque sin objeto de una sola vez el set no tiene forma de forzar KOs tras la subida. El tipo Bicho/Acero resiste una lista enorme (Psíquico, Hada, Dragón, Roca, Planta, Hielo, Bicho, Acero, Normal, Veneno) pero es 4x débil a Fuego, así que Scizor entra a resistidas, no a ataques de fuego.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme (65, no recibe el boost de Experto) cambia daño puro por quitar el objeto rival y castigar a los que entran con baya u objeto defensivo.',
          replaces: 'BUGBITE'
        },
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Versión resistente: recupera medio PS entre subidas para varias rondas de Danza Espada; combina mejor con Restos que con Vidasfera.',
          replaces: 'CLOSECOMBAT'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre para ganar los espejos de Velocidad 65 y superar a base 70 neutrales, a cambio de poder de ruptura.'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'TECHNICIAN',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BULLETPUNCH', 'UTURN', 'CLOSECOMBAT', 'KNOCKOFF'],
      justification:
        'Uso alternativo sin turno de preparación: Cinta Elección sobre Ataque 130 más el x1,5 de Experto convierte Punos Cometa en una prioridad que revienta a la mayoría de los debilitados y ofensivos frágiles sin arriesgar el turno de Danza Espada. Ida y Vuelta mantiene el momentum y evita quedar bloqueado en el movimiento equivocado, algo clave para un usuario de Cinta lento. Close Combat es la respuesta a Aceros y muros, y Desarme quita objetos mientras pega. Firme maximiza la potencia porque la Velocidad sigue siendo baja aun con inversión y la prioridad es el plan principal.',
      alternatives: [
        {
          slot: 'move',
          value: 'DUALWINGBEAT',
          note: 'Doble Ala (bicho-independiente, tipo volador) golpea a Lucha y Planta que aguantan el resto del set, a cambio de la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        }
      ]
    }
  ]
}

export default scizor
