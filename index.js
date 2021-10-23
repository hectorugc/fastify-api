const { ApolloServer } = require('apollo-server');
const {categories,menuItems,restaurants} = require("./db")
const typeDefs = require("./schema")
const Query = require("./resolvers/Query")
const Category = require("./resolvers/Category")
const MenuItems = require("./resolvers/MenuItems")
const server = new ApolloServer({ typeDefs,
  resolvers: {
  Query,
  Category,
  MenuItems
},
context: {
  categories,
  menuItems,
  restaurants
} });


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});