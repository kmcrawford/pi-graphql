const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');


const SurveyMonkeyAPI = require('./datasources/survey-monkey-api');



// set up any dataSources our resolvers need
const dataSources = () => ({
    surveyMonkeyAPI: new SurveyMonkeyAPI()
});



// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: true,
});


  server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/sandbox
    `);
  });
