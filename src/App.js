import logo from './logo.svg';
import './App.css';
import GridOfPosts from './GridOfPosts';
import { Paper, Typography, Box} from '@mui/material';
import { height, margin } from '@mui/system';
import { green } from '@mui/material/colors';

function App() {
  return (
      <Box sx={{
        backgroundColor: '#9ba37b',
        width: '100vw',
        height: '100vh'
        
        
        }}>
      <Box sx={{backgroundColor: '#ede1b5'}}>
        <Typography variant="h3" component="div" sx={{padding: 2, margin: 2}}>
          Nat and Cael's Blog!
        </Typography>
        <Typography variant="h5" component="div" sx={{padding: 2, margin: 2}}>
          Latest Status: Chilling in Papeete while it rains buckets.
        </Typography>
      </Box>

      <Paper sx={{padding: 2, margin: 2}}>
        <GridOfPosts />
      </Paper>
      </Box>
  );
}

export default App;
