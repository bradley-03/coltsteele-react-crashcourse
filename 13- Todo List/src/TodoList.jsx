import List from '@mui/material/List';

const initialTodos = [
    {id: 1, text: 'Walk the Dog', completed: false},
    {id: 2, text: 'Walk the Cat', completed: false},
    {id: 3, text: 'Walk the Chickens', completed: true},
]

export default function TodoList () {
    return (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}></List>
    )
}