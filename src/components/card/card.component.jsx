import { Component } from "react";

import './card.style.css'

class Card extends Component{
    render(){
        const{id,email,name} = this.props.monster;
        return(
            <div className='card-container' key={id}>
            <img alt={`monter ${name}`}
            src={` https://robohash.org/${id}?set=set2`} 
            />
            <h2> {name}</h2>
            <p>{email}</p>
        </div>
        )
    }
}

export default Card;