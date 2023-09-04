import "./menu.css";
import { pizzaData } from "../../data";
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
          <li className={`pizza ${pizza.soldOut && "sold-out"}`}>
            <img src={pizza.photoName} alt={pizza.name} />
            <div>
              <h3>{pizza.name}</h3>
              <p>{pizza.ingredients}</p>
              <span>{pizza.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Menu;
