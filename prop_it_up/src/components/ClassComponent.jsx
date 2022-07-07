import React, { Component } from 'react';
    
// construct a props function to change age value.
class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            // Defines the current 'state' for the value you are changing.
            age: props.age
        };
    }

    incrementAge = () => {
        this.setState({age: this.state.age + 1});
        //set the state for the value you're changing, along with the parameter for the change. In this case, we are incrementing the age + 1.
        console.log("This works:", this.state.age);
    }

    render() {
        const {first_name, last_name, pronoun, hair_color} = this.props;
        return(
            <div>
                <h3>{first_name} {last_name}</h3>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hair_color}</p>
                <button onClick = {this.incrementAge}>It's {pronoun} Birthday!</button>
            </div>
        );
    }
}
    
export default User;