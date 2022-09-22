import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ApolloProvider} from '@apollo/client'
import Main from "./components/main/main";
import {Client} from "./GraphQL/GraphQlClient";


function App() {
  return <ApolloProvider client={Client}>
      <Main/>
  </ApolloProvider>
}

export default App;
