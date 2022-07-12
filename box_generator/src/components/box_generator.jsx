import React, { useState } from 'react';

const Box_generation = () => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");
    const [boxes, setBoxes] = useState([]);

const A_Box = (newBox) => setBoxes([...boxes, newBox]);

const box = {
    backgroundColor: color,
    width: `${width}px`,
    height: `${width}px`
}

const boxSubmit = (e) => {
    e.preventDefault();
    A_Box(box);
    setColor('');
    setWidth('');
}

return(
    <div>
        <div>
            <form onSubmit={ boxSubmit }>
                <p>
                    <label>Color: </label>
                    <input type="text" value ={color} onChange={(e) => setColor(e.target.value)} />
                </p>
                <p>
                    <label>Dimensions: </label>
                    <input type="text" value ={width} onChange={(e) => setWidth(e.target.value)} />
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div class="d-flex">
            {boxes.map((item, i) => {
                return(
                    <div key={i} style={item}></div>
                );
            })}
        </div>
    </div>
)
}
export default Box_generation;