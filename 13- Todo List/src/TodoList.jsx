import { useState } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid'

const initialTodos = [
    { id: 1, text: 'Walk the Dog', completed: false },
    { id: 2, text: 'Walk the Cat', completed: false },
    { id: 3, text: 'Walk the Chickens', completed: true },
]

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos)

    const removeTodo = (todo) => {
        setTodos(prevTodos => {
            return prevTodos.filter((t) => t.id !== todo.id)
        })
    }
    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo
                }
            })
        })
    }
    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), text: text, completed: false}]
        })
    }

    return (
        <div>
            <h1>Todo List</h1>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} remove={() => removeTodo(todo)} toggle={() => toggleTodo(todo.id)} />
                ))}
                <TodoForm submit={addTodo} />
            </List>
        </div>

    )
}