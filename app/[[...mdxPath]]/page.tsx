import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../mdx-components'
import { Giscus } from '../../components/Giscus'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: {
  params: Promise<{ mdxPath: string[] }>
}) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

const Wrapper = useMDXComponents().wrapper

export default async function Page(props: {
  params: Promise<{ mdxPath: string[] }>
}) {
  const params = await props.params
  const { default: MDXContent, ...rest } = await importPage(params.mdxPath)
  return (
    <Wrapper {...rest}>
      <MDXContent {...props} params={params} />
      <Giscus />
    </Wrapper>
  )
}
