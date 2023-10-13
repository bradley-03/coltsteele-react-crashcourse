import { useState } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useEffect } from 'react';
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

// const initialTodos = [
//     { id: 1, text: 'Walk the Dog', completed: false },
//     { id: 2, text: 'Walk the Cat', completed: false },
//     { id: 3, text: 'Walk the Chickens', completed: true },
// ]

const initData = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if (!data) return [] // check if data exists already
    return data
}

export default function TodoList() {

    const [todos, setTodos] = useState(initData)

    useEffect(() => {
        localStorage.setItem(
            'todos',
            JSON.stringify(todos)
        )
    }, [todos]) // when todos changes, run the effect

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
            return [...prevTodos, {id: crypto.randomUUID(), text: text, completed: false}]
        })
    }

    return (
        <Box sx={{
            display: "flex",
            alignItems:"center", 
            justifyContent: "center", 
            textAlign: "center", 
            flexDirection: "column",
            mt: 3
        }}>
            <Typography variant="h2">Todo List</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.length === 0 && <h2>No Todos Yet!</h2>}
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} remove={() => removeTodo(todo)} toggle={() => toggleTodo(todo.id)} />
                ))}
                <TodoForm submit={addTodo} />
            </List>
        </Box>

    )
}