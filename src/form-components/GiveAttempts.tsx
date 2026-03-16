import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"

export function GiveAttempts(): React.JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [addAttempts, setAddAttempts] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <span>remaining attempts: {numAttempts}</span>
            <Form.Group controlId= "formUpdateAttempts">
                <Form.Label>Get more attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={addAttempts}
                    onChange={(event:  React.ChangeEvent<HTMLInputElement>) => {isNaN(+event.target.value)? setAddAttempts(addAttempts) : setAddAttempts(+event.target.value)}}/>
            </Form.Group>
            <Button onClick= {() => {setNumAttempts(numAttempts - 1)}} disabled={numAttempts <= 0}>use</Button>
            <Button onClick= {() => {setNumAttempts(numAttempts + addAttempts)}}>gain</Button>
        </div>
    );
}
