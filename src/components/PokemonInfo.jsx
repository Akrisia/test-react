import axios from "axios";
import { Component } from "react";

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        error: null,
        status: 'idle'
    };

    async componentDidUpdate(prevProps) {
        if (prevProps.pokemonName !== this.props.pokemonName) {
            this.setState({ status: 'pending' });
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
                .then(pokemon => this.setState({ pokemon: pokemon.data, status: 'resolved' }))
                .catch(error => this.setState({ error, status: 'rejected' }));
        }
    }

    render() {
        const { pokemon, error, status } = this.state;

        if (status === 'idle') {
            return <p>Введіть ім"я покемона</p>
        }

        if (status === 'pending') {
            return <div>Завантажуємо...</div>
        }

        if (status === 'rejected') {
            return <h3>Немає покемона з іменем {this.props.pokemonName}</h3>
        }

        if (status === 'resolved') {
            return (
                <div>
                    <p>{pokemon.name}</p>
                    <img src={pokemon.sprites.other['official-artwork'].front_default} width='300' alt={pokemon.name} />
                </div>
            )
        }
    }
}