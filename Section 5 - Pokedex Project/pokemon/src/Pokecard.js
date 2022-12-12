import React, { Component } from "react";
import './Pokecard.css';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
    render() {
        const props = this.props;
        let imgSrc = `${POKE_API}${props.id}.png`
        return (
            <div className="Pokecard">
                <h2>{props.name}</h2>
                <img src={imgSrc} alt={props.name}/>
                <span>Type: {props.type}</span>
                <span>EXP: {props.exp}</span>
            </div>
        )
    }
}

export default Pokecard;