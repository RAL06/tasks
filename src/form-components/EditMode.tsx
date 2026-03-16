import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-check"
                label="edit"
                checked={editing}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setEditing(event.target.checked)}}
                />
            {!editing && isStudent? userName + " is a student": userName + " is not a student"}
            <Form.Group controlId="nameinput">
                <Form.Label>Enter your name:</Form.Label>
                <Form.Control
                    value={userName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {editing? setUserName(event.target.value) : setUserName(userName)}}
                    hidden={!editing}/>
            </Form.Group>
            <Form.Check
                type="checkbox"
                id="is-student-check"
                label="Are you a student?"
                checked={isStudent}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setIsStudent(event.target.checked)}}
                hidden={!editing}
                />
        </div>
    );
}
