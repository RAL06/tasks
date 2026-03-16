import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    //const colorArr = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "black"];
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type= "radio"
                name= "red"
                onChange={(event) => {setColor(event.target.value)}}
                id="response-red"
                label={<span style={{backgroundColor: 'red'}}>red</span>}
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type= "radio"
                name= "blue"
                onChange={(event) => {setColor(event.target.value)}}
                id="response-blue"
                label={<span style={{backgroundColor: 'blue'}}>blue</span>}
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type= "radio"
                name= "orange"
                onChange={(event) => {setColor(event.target.value)}}
                id="response-orange"
                label={<span style={{backgroundColor: 'orange'}}>orange</span>}
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type= "radio"
                name= "yellow"
                onChange={(event) => {setColor(event.target.value)}}
                id="response-yellow"
                label={<span style={{backgroundColor: 'yellow'}}>yellow</span>}
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                inline
                type= "radio"
                name= "green"
                onChange={(event) => {setColor(event.target.value)}}
                id="response-green"
                label={<span style={{backgroundColor: 'green'}}>green</span>}
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type= "radio"
                name= "purple"
                onChange={(event) => {setColor(event.target.value)}}
                id="response-purple"
                label={<span style={{backgroundColor: 'purple'}}>purple</span>}
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type= "radio"
                name= "pink"
                onChange={(event) => {setColor(event.target.value)}}
                id="response-pink"
                label={<span style={{backgroundColor: 'pink'}}>pink</span>}
                value="pink"
                checked={color === "pink"}
            />
            <Form.Check
                inline
                type= "radio"
                name= "black"
                onChange={(event) => {setColor(event.target.value)}}
                id="response-black"
                label={<span style={{backgroundColor: 'black'}}>black</span>}
                value="black"
                checked={color === "black"}
            />
            You have chosen <span data-testid="colored-box" style={{backgroundColor: color}}>{color}</span>
        </div>
    );
}
