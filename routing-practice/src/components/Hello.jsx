import { useParams } from "react-router";

const Hello = (props) => { 
    const { textColor } = useParams();
    const { backgroundColor } = useParams();
    return (
        <div style={{backgroundColor : backgroundColor}}>
        <h1 style={{color : textColor }}>Hello! °˖✧◝(⁰▿⁰)◜✧˖°</h1>
        <img src="https://c.tenor.com/lVXo9rYZECIAAAAC/anime-happy.gif" />
        </div>
    );
}

export default Hello;