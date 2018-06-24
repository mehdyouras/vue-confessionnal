import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://eu1.prisma.sh/mehdy-ouras-5f2220/vue-confessionnal-api/dev',
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

export {
  VueApollo,
  apolloClient,
};

// Install the vue plugin
// Vue.use(VueApollo)