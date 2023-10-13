import './App.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import Navbar from './Navbar';

function App() {
	return (
		<>
			<Navbar />
			{/* <Button variant="text">Text</Button>
			<Button variant="contained">Contained</Button>
			<Button variant="contained" color="secondary" size="large">Contained</Button>
			<Button variant="outlined" color="error">Outlined</Button>
			<IconButton aria-label="delete" color="primary">
				<DeleteIcon />
			</IconButton>
			<RatingDemo/> */}
			<FormDemo/>
		</>
	)
}

export default App
