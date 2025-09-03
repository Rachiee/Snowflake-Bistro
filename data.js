// Import all images at the top
import beerImg from './images/beer.png'
import burgerImg from './images/burger.png'
import heroImg from './images/hero-imgg.png'
import pizzaImg from './images/pizza.png'


export const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni, mushroom, mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕",
        image: pizzaImg
    },
    {
        name: "Hamburger",
        ingredients: ["beef, cheese, lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1,
        image: burgerImg
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2,
        image: beerImg
    }
]