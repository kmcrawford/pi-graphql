const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get Surveys"
    surveys: [Survey!]!
    "Fetch answers to Survey"
    surveyResponses(surveyId: ID!): [Response]!
  }

  "A Survey"
  type Survey {
    id: ID!
    "The survey's title"
    title: String!
    "A survey's nickname"
    nickname: String
    "Link to the Survey"
    href: String
  }

  "Response to Question"
  type Response {
    id: ID!
    "Time it took to answer"
    total_time: Int!
    "Date Modified"
    date_modified: String!
    "Date Created"
    date_created: String!
    "Response Status" 
    response_status: String!
    "Questions"
    questions: [Question!]!
  }
  
  "Question and Answer"
  type Question {
    id: ID!
    "Answers to the Question"
    answers: [Answer!]!
  }

  "Answer"
  type Answer {
    type: String!
    value: String!
  }
`;

module.exports = typeDefs;