// Config Dotenv 
require('dotenv').config();

// Import npm dependencies
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-bodyparser');
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa');
const { makeExecutableSchema } = require('graphql-tools');

// Import local dependencies
const typeDefs = require('./typeDefs.gql');
const resolvers = require('./resolvers');

// Application
const app = new Koa();
const router = new Router();

const schema =  makeExecutableSchema({
  typeDefs,
  resolvers
});

/**
 * Home route
 */
router.get('/', (ctx, next) => {
  ctx.body = 'BLA!';
});


/**
 * GraphQL Node
 * All the data is requested from this endpoint.
 */
router
.get('/graphql', graphqlKoa({ schema }))
.post('/graphql', graphqlKoa({ schema }));

/**
 * GraphiQL Node
 * GraphiQL to debug graphql queries.
 */
router
.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));


// Use middleware, and start the app.
app
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(process.env.PORT ? process.env.PORT : 4000 );