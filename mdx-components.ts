import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import type { MDXComponents } from 'nextra/mdx-components'
import { Mermaid } from './components/Mermaid'

export function useMDXComponents(components?: MDXComponents) {
  return getDocsMDXComponents({ ...components, Mermaid } as MDXComponents)
}
