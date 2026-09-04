import type { PokemonTemplateSet } from '../../lib/types'

export type TemplateModule = { default: PokemonTemplateSet }
export type TemplateLoader = () => Promise<TemplateModule>

const modules = import.meta.glob<TemplateModule>('./*.ts')

export function fileKeyToInternalName(path: string): string {
  const base = path.split('/').pop() ?? path
  return base.replace(/^\.\//, '').replace(/\.ts$/, '').toUpperCase()
}

export const TEMPLATE_LOADERS: ReadonlyMap<string, TemplateLoader> = new Map(
  Object.entries(modules)
    .filter(([path]) => !path.endsWith('/index.ts'))
    .map(([path, load]) => [fileKeyToInternalName(path), load as TemplateLoader])
)
