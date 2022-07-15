import { useParams } from "react-router";

const Hello = (props) => { 
    const { textColor } = useParams();
    const { backgroundColor } = useParams();
    const { textBody } = useParams();

    return (
        <div style={{backgroundColor : backgroundColor}}>
        <h1 style={{color : textColor }}>
            {textBody} is a 
            {isNaN(textBody) ?
            ' word ' :
            ' number '
            }
            °˖✧◝(⁰▿⁰)◜✧˖°
        </h1>
        <img src="https://c.tenor.com/lVXo9rYZECIAAAAC/anime-happy.gif" />
        </div>
    );
}

export default Hello;