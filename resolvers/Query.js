const Query = {
    categories: (parent,args,{categories }) => categories,
    category:(parent,args,{categories})=> {
      return categories.find(category=> category.id === args.id)
    },
    menuItems:(parent,args,{menuItems}) => menuItems,
    restaurant:(parent,args,{restaurants}) => {
      let restaurant = restaurants.find((restaurant)=>{
        return restaurant.id === args.id
      })
      return restaurant
    }
  }

  module.exports = Query 