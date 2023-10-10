import './App.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
	return (
		<>
			<Button variant="text">Text</Button>
			<Button variant="contained">Contained</Button>
			<Button variant="contained" color="secondary" size="large">Contained</Button>
			<Button variant="outlined" color="error">Outlined</Button>
			<IconButton aria-label="delete" color="primary">
				<DeleteIcon />
			</IconButton>
		</>
	)
}

export default App
