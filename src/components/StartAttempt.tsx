import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {

    const [numAttempts, changeAttempts] = useState<number>(4);
    const [currentProgress, setInProgress] = useState<boolean>(false);

    function begin(): void {
        changeAttempts(numAttempts - 1);
        setInProgress(true);
    }
    return (
        <div>
            number of attempts: {numAttempts}
            <Button onClick= {begin} disabled = {currentProgress || numAttempts <= 0}>Start Quiz</Button>
            <Button onClick = {() => {setInProgress(false)}} disabled = {!currentProgress}>Stop Quiz</Button>
            <Button onClick = {() => {changeAttempts(numAttempts + 1)}} disabled = {currentProgress}>Mulligan</Button>
        </div>
    );
}
