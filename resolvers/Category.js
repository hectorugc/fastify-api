const  Category = {
    menuItems:(parent,args,{menuItems}) => {
      return menuItems.filter(menuItem => {
        return menuItem.category === parent.id
      }) 
    }
  }


module.exports = Category