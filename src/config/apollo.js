import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

import { createUploadLink } from 'apollo-upload-client';

const link = createUploadLink({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;
