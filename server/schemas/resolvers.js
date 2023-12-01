const resolvers = {
 Query: {
    currentUser: async (parent, {}, context) => {
        return;
    },
    userDreams: async (parent, {}, context)=>{
        return;
    },
 },
 Mutation: {
    /*signUp(username: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload*/
    signUp: async (parent, args) => {

    },
    login: async(parent, args) => {

    }
 }
};

module.exports = resolvers;