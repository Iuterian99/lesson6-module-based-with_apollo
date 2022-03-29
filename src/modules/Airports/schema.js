const { gql } = require("apollo-server-express");

module.exports = gql`
  type Airports {
    airport_id: ID!
    airport_name: string!
    airport_location: string!
  }

  type Query {
    airports: [Airports!]!
  }
`;
