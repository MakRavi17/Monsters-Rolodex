import { Component } from "react";
import SearchBox from "./components/cart-list/search-box/search-box.component";
import CartList from "./components/cart-list/cart-listcomponent";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    console.log("render from App");
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox 
        className='monsters-search-box'
        placeholder="Search monsters"
        onChangeHandler={(event) =>
        this.setState({ searchField: event.target.value })
        }/>
        <CartList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
