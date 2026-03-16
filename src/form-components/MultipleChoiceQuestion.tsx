import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({options,expectedAnswer,}: {options: string[], expectedAnswer: string}): React.JSX.Element {
    const [currentChoice, setCurrentChoice] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multiChoiceQuestion">
                <Form.Label>Please select the correct option.</Form.Label>
                <Form.Select value={currentChoice} onChange={(e) => {setCurrentChoice(e.target.value)}}>
                    {options.map((option: string) => 
                        <option key={option} value={option}>{option}</option>
                )}
                </Form.Select>
            </Form.Group>
            {(currentChoice === expectedAnswer)? <span>✔️</span>:<span>❌</span>}
        </div>
    );
}
