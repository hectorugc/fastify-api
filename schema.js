const { gql } = require('apollo-server');

const typeDefs = gql`

# A restaurant has branch of Categrories
  type Restaurant {
    id:ID!,
    name:String!
    owner:String!
    mail:String!
    category: [Category!]

  }
# A category has a branch of Menu items
  type Category {
    id: ID!
    categoryName:String!
    menuItems: [MenuItems!]
    restaurants:Restaurant
  }


  type MenuItems {
    id: ID!
    image: String
    price: Float!
    priceCurrency:String
    name: String!
    nutrition:[String]
    portionSize:String
    preparationMethods:[String]
    allergen:Boolean
    category:Category
  }


  # Mutation for the Restaurant, Category and MenuItems




 

  type Query {
    menuItems:[MenuItems!]!
    categories:[Category]
    category(id:ID!): Category
    restaurants: [Restaurant]
    restaurant(id: ID!): Restaurant

  }

  
  type Mutation {
    addResturant(
      name: String,
      owner:String!,
      mail:String!
      ): Restaurant


    addCategory(): Category
    addMenuItem() MenuItems
  }
  

`;

module.exports = typeDefs