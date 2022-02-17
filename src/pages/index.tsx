import { graphqlClient } from '../services/graphql-client'
import { GetStaticProps } from 'next'
import { PageDocument } from '../generated/graphql'

export default function Home({ page }) {
  return <h1>{page.title}</h1>
}

export const getStaticProps: GetStaticProps = async () => {
  const { page } = await graphqlClient.request(PageDocument, { slug: 'blog' })

  return { props: { page } }
}
