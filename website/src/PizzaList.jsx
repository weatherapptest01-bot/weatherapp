
import Vegpizza from "./Vegpizza.jsx";
import VegImg from "./assets/vegpizza.jpeg";
import ChickenImg from "./assets/chickenpizza.jpeg";
import BbqImg from "./assets/bbqchickenpizza.jpeg";
import TandooriImg from "./assets/tandoripizza.jpeg";
import SpicychickenImg from "./assets/spicychickenpizza.jpeg";
import CokeImg from "./assets/coke.jpeg";
import SpriteImg from "./assets/sprite.jpeg";

function PizzaList() {
  const list = [
    {
      name: "Chicken Pizza",
      image: ChickenImg,
      price: "480",
      rating: "5.0",
    },
    {
      name: "BBQ Chicken Pizza",
      image: BbqImg,
      price: "490",
      rating: "4.9",
    },
    {
      name: "Tandoori Chicken Pizza",
      image: TandooriImg,
      price: "609",
      rating: "4.7",
    },
    {
      name: "Spicy Chicken Pizza",
      image: SpicychickenImg,
      price: "657",
      rating: "4.9",
    },
    {
      name: "Veg Pizza",
      image: VegImg,
      price: "250",
      rating: "5.0",
    },
    {
      name: "Coke",
      image: CokeImg,
      price: "120",
      rating: "4.8",
    },
    {
      name: "Sprite",
      image: SpriteImg,
      price: "180",
      rating: "5.0",
    },
  ];
   sorting
   list.sort((a, b) => b.rating - a.rating);
   list.sort((a, b) => a.price - b.price);
   list.sort((a, b) => a.name.localeCompare(b.name));
   //filtering
   const filteredList = list.filter(pizza => pizza.price <= 500);
   //filter using in map
   //const PizzaItems = filteredList.map((pizza) => (
  const PizzaItems = list.map((pizza

  ) => (
    <Vegpizza
    
      name={pizza.name}
      image={pizza.image}
      price={pizza.price}
      rating={pizza.rating}
    />
  ));

  return (
    <>
      {PizzaItems}
    </>
  );
}

export default PizzaList;


