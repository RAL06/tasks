import React from "react";
import "./App.css";
import {Button} from 'react-bootstrap';

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>Test</h1>
            <img src="../../HC_275.jpg" alt="A picture of a crane that I found after googling CISC 275."/>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Richard Lomonaco, Hello World.
            </p>
            <p>Top 3 fruits of all time (undisputed)</p>
            <ol>
                <li>Mango</li>
                <li>Raspberry</li>
                <li>Kiwi</li>
            </ol>
            <Button onClick={ () => {console.log("Hello World!") } }>Log Hello World</Button>
            <div style={ {backgroundColor: 'red', width: '2', height: '3'}}>
                fake
            </div>
            </div>
    );
}

export default App;
