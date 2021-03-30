import React, { useState } from 'react';
import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button
} from "reactstrap"

import { v4 as uuidv4 } from 'uuid'




//methods can also be passed as a prop
const TodoForm = ({addTodos}) => {

    const [todoString, setTodoString] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoString === "") {
            return alert("Please enter a TODO");
        }
    
        const todo = {
            todoString,
            id: uuidv4()
        }
    
        addTodos(todo);
    
    
        setTodoString("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                    >
                    </Input>
                    <InputGroupAddon addonType="prepend">
                        <Button
                            color="success"
                            className="rounded-lg"
                        >
                            Add
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}



export default TodoForm;