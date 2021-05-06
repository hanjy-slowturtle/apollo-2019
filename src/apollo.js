import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "http://apollo-movie-server.herokuapp.com/"
});

export default client;