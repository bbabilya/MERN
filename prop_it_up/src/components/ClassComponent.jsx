import React, { Component } from 'react';
    
    
class User extends Component {
    render() {
        const {first_name, last_name, age, hair_color} = this.props;
        return(
            <div>
                <h3>{first_name} {last_name}</h3>
                <p>{age}</p>
                <p>{hair_color}</p>
                <button>This is a Button</button>
            </div>
        );
    }
}
    
export default User;