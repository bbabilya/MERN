import React, { Component } from 'react';
    
// construct a props function to change age value.
const User = props => {
    return(
        <div>
            <h1> { props.firstName } { props.lastName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <p>Pronoun: { props.pronoun }</p>
        </div>
    )
    }

export default User;