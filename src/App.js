import axios from "axios";
import { Component } from "react";
import { ToastContainer } from "react-toastify";
import Form from "./components/Form";
import PokemonInfo from "./components/PokemonInfo";

export default class App extends Component {
  state = {
    pokemonName: "",
  };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
        <Form onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
