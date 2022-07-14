import { useParams } from "react-router";

const Number = (props) => { 
    const { number } = useParams(); //declare # to display
    
    return (
        <div>
        <h1>Your number is { number }!</h1>
        <img src="https://c.tenor.com/6tajpXmSj28AAAAd/anime-smile.gif" />
        </div>
    );
}

export default Number;