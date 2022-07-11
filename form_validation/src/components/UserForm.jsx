import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [firstNameError, setfirstNameError] = useState("");
    const [lastName, setlastName] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

const validatefirstName = (e) => {
    if(e.target.value === 0){
        setfirstNameError("");
    }
    if(e.target.value.length <= 2){
        setfirstNameError("First Name must be 2 characters or longer.");
    }else {
        setfirstNameError("");
        setfirstName(e.target.value);
    }
}

const validatelastName = (e) => {
    if(e.target.value === 0){
        setlastNameError("");
    }
    if(e.target.value.length <= 2){
        setlastNameError("Last name must be 2 characters or longer.");
    }else {
        setlastNameError("");
        setlastName(e.target.value);
    }
}

const validateEmail = (e) =>
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
  {
    setEmailError("");
    console.log("setEmailError");
    setEmail(e.target.value);
  } else{
    setEmailError("You have entered an invalid email address!");
  }
}

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email };
        console.log("Welcome", newUser);
    };
    
    return(
        <>
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ validatefirstName } />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
            <label>Last Name: </label> 
                <input type="text" onChange={ validatelastName } />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ validateEmail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        </>
    );
};
export default UserForm;
