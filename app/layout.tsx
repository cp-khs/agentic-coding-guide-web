import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    template: '%s | Agentic Coding Guide',
    default: 'Agentic Coding Guide'
  },
  description: 'Claude Code를 활용한 에이전틱 코딩 학습 자료 - 경력 개발자를 위한 실전 가이드',
  metadataBase: new URL('https://agentic-coding-guide.vercel.app')
}

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
        🤖 Agentic Coding Guide
      </span>
    }
    projectLink="https://github.com/your-org/agentic-coding-guide"
  />
)

const footer = (
  <Footer>
    <span>MIT {new Date().getFullYear()} © Agentic Coding Guide</span>
  </Footer>
)

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/your-org/agentic-coding-guide"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ backToTop: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
