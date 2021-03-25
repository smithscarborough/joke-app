import React, { Component } from "react";

class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: 'another joke goes here...',
            isLoading: false,
            categories: [],
            category: "dev"
        };
    }

    componentDidMount = () => {
        this.fetchCategories();
    };

    fetchCategories = () => {
        fetch('https://api.chucknorris.io/jokes/categories')
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                categories: data
            });
        });
    };

    // below in the parameters is a 'property default,' which just means that if we don't specify what joke category we want, it will default to "dev":
    fetchJoke = () => {
        this.setState({
            isLoading: true
        });
        fetch(`https://api.chucknorris.io/jokes/random?category=${this.state.category}`)
        .then((res) => res.json())
        .then((data) => {
            // update the state with a new joke that comes from the Chuck Norris jokes API:
            this.setState({
                joke: data.value,
                isLoading: false,
            });
        });
    }

    handleChange = (event) => {
        this.setState({
            category: event.target.value
        });
    };
    

    render() {
        return (
            <div>
                <p>{this.state.isLoading ? 'Loading...' : this.state.joke}</p>
                <select onChange={this.handleChange} value={this.state.category}>
                    {this.state.categories.map((category) => {
                        return <option key={category}>{category}</option>;
                    })}
                    </select>
                    <button onClick={this.fetchJoke}>New Joke</button>
                    </div>
                    );
                }
            }

        
export default Joke;