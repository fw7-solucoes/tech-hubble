import Head from 'next/head'
import { GetStaticProps } from 'next'

/**
 * Services.
 */
import { graphqlClient } from '../services/graphql-client'
import { PageDocument } from '../generated/graphql'

/**
 * Components.
 */
import { Header } from '../components/Header'
import { FullPage } from '../components/Page/FullPage'
import { ClippedContainer } from '../components/Page/ClippedContainer'

export default function Home({ page }) {
  return (
    <>
      <Head>
        <title>Blog - FW7</title>
      </Head>
      <FullPage>
        <ClippedContainer>
          <Header />

          <section className="presentation-page">
            <h1>{page.title}</h1>
            <p>{page.subtitle}</p>
          </section>
        </ClippedContainer>
      </FullPage>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { page } = await graphqlClient.request(PageDocument, { slug: 'blog' })

  return { props: { page } }
}
