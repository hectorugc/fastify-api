const MenuItems = {
    category:(parent,args,{menuItems}) => {
      return categories.find((category) => {
        return category.id === parent.category
      })
    }
  }

module.exports = MenuItems