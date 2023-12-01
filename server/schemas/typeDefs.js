const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Dream {
    _id: ID!
    title: String!
    description: String
    user: User!
    createdAt: String!
    updatedAt: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    currentUser: User
    userDreams: [Dream]
    # Define other queries here
  }

  type Mutation {
    signUp(username: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    # Define other mutations here
  }
`;

module.exports = typeDefs;
