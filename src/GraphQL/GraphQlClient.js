import {onError} from "@apollo/client/link/error";
import {ApolloClient, from, HttpLink, InMemoryCache} from "@apollo/client";

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

export const Client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})
