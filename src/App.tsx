import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client'
import Main from "./components/main/main";
import {onError} from "@apollo/client/link/error";

const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.map(({message, path}) => {
            alert(`There was an error ${message}`)
        })
    }
})
const link = from([
    errorLink,
    new HttpLink({uri: 'https://countries.trevorblades.com'})
]);
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})


function App() {
  return <ApolloProvider client={client}>
      <Main/>
  </ApolloProvider>
}

export default App;
