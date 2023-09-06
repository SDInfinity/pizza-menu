import "./menu.css";
import { pizzaData } from "../../data";
import Pizza from "../Pizza";

const Menu = () => {
  return (
    <main className="menu container">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} {...pizza} />
        ))}
      </ul>
    </main>
  );
};

export default Menu;
