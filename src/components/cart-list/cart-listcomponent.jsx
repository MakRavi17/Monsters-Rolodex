import { Component } from "react";
import "./cart-list.styles.css";
import Cart from "./cart/cart.component";

class CartList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="cart-list">
       {monsters.map((monster) => (
        <Cart key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default CartList;
