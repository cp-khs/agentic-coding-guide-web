'use client'

import { useEffect, useState } from 'react'

interface MermaidProps {
  children: string
}

let idCounter = 0

export function Mermaid({ children }: MermaidProps) {
  const [svg, setSvg] = useState('')

  useEffect(() => {
    async function render() {
      const mermaid = (await import('mermaid')).default
      mermaid.initialize({ startOnLoad: false, theme: 'neutral' })
      const id = `mermaid-${++idCounter}`
      const { svg } = await mermaid.render(id, children.trim())
      setSvg(svg)
    }
    render()
  }, [children])

  if (!svg) return null

  return (
    <div
      className="my-6 flex justify-center overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
