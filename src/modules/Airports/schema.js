const { gql } = require("apollo-server-express");

module.exports = gql`
  type Airports {
    airport_id: ID!
    airport_name: String!
    airport_location: String!
  }

  type Airport_reyses {
    reyse_id: ID!
    reyse_to: String!
    airport_id: ID!
  }

  type Query {
    airports: [Airports!]!
    airport_reyses(airport_id: ID!): [Airport_reyses!]!
  }
`;
