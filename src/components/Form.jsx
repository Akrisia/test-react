import { Component } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from 'react-icons/im';

export default class Form extends Component {
    state = {
        pokemonName: '',
    };

    handleNameChange = evt => {
        this.setState({ pokemonName: evt.currentTarget.value.toLowerCase() });
    };

    handleSubmit = evt => {
        evt.preventDefault();

        if (this.state.pokemonName.trim() === '') {
            toast.error('Введіть ім"я покемона');
            return;
        }
        this.props.onSubmit(this.state.pokemonName);
        this.setState({ pokemonName: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='pokemonName'
                    value={this.state.pokemonName}
                    onChange={this.handleNameChange}
                />
                <button type='submit'>
                    < ImSearch />
                    Знайти
                </button>
            </form>
        );
    }
}