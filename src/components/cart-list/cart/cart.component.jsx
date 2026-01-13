import { Component } from "react";
import "./cart.styles.css";

class Cart extends Component {
  render() {
    const { id, name, email } = this.props.monster;

    return (
      <div className="cart-container">
        <img src={`https://robohash.org/${id}?set=set2`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}


export default Cart;