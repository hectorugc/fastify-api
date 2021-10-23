const {v4} = require('uuid')
const { restaurant } = require('./Query')
const Mutation = {
    addResturant: (parent,{
    name,
    owner,
    mail,
   
    },{restaurants}) => {
        let newRestaurant = {
            id:v4(),
            name,
            owner,
            mail,
        }
        restaurants.push(newRestaurant)
        return newRestaurant
     },
     removeResturant:(parent,{id},{restaurants}) => {
         let index = restaurants.findIndex((restaurant)=>{
             return restaurant.id === id
         });
         restaurants.splice(index,1)
         return true
     }
}


module.exports = Mutation