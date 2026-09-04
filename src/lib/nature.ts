import { NATURE_EFFECT } from './constants'

export function natureSentence(natureKey: string): string {
  const eff = NATURE_EFFECT[String(natureKey).toUpperCase()]
  if (!eff) return 'Esta naturaleza es neutra — no altera sus stats.'
  return `Esta naturaleza aumenta ${eff[0]} y reduce ${eff[1]}.`
}
