

const restaurants = [
    {
    id:"1",
    name:"Las Alitas",
    owner:"Carlos tabares",
    mail:"carlos@gmail.com"
    },
    {
    id:"2",
    name:"Taqueando",
    owner:"Carmen",
    mail:"carmen@gmail.com"
    }

]

const categories = [{
    id: "1",
    categoryName: "Elegido para ti"
},
{
    id: "2",
    categoryName: "Paquetes"
},
{
    id: "3",
    categoryName: "Alitas y Boneless"
},
{
    id: "4",
    categoryName: "Entradas"
},
{
    id: "5",
    categoryName: "Hamburguesas"
},
{
    id: "6",
    categoryName: "Bebidas"
},

]

const menuItems = [{
    id: "1",
    price: 12.2,
    name: "20 piezas Alitas",
    category: "1"
},
{
    id: "2",
    price: 12.2,
    name: "30 piezas Alitas",
    category: "1"
},
{
    id: "3",
    price: 32.2,
    name: "25 piezas mas papas fritas",
    category: "2"
},
{
    id: "4",
    price: 23.5,
    name: "30 piezas Alitas con 2 litros de refresco",
    category: "3"
},
{
    id: "5",
    price: 12.2,
    name: "20 piezas Alitas",
    category: "4"
},
{
    id: "6",
    price: 8.2,
    name: "Hamburguesa",
    category: "5"
},
{
    id: "7",
    price: 2.2,
    name: "Coca Cola",
    category: "6"
}
]




module.exports = {
categories,
menuItems,
restaurants
}