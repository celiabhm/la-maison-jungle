import PlantItem from "../PlantItem/PlantItem";
import plantList from "../../datas/plantList.json";
import Categories from "../Categories/Categories";
import { useState } from "react";
import "./ShoppingList.module.css";

const ShoppingList = ({ cart, updateCart }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce((accumulateur, plant) => {
    const category = plant.category;

    if (!accumulateur.includes(category)) {
      accumulateur.push(category);
    }
    return accumulateur;
  }, []);

  const addToCart = (name, price) => {
    const currentPlantSaved = cart.find((plant) => plant.name === name);

    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  };

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <PlantItem
                name={name}
                water={water}
                light={light}
                price={price}
                cover={cover}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default ShoppingList;
