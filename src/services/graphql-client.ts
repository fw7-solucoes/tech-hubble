import { GraphQLClient } from 'graphql-request'

/**
 * Api endpoint.
 */
const endpointAPI =
  'https://api-sa-east-1.graphcms.com/v2/ckzphczdg499j01yyfmge5owp/master'

/**
 * Create graphql client.
 */
export const graphqlClient = new GraphQLClient(endpointAPI)
