const {
    ApolloServer
} = require('apollo-server');
const glue = require('schemaglue');

const {
    schema, resolver
} = glue('src/graphql');

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolver
});

server.listen(4000).then(({url}) => console.log(`server has started at ${url}`));