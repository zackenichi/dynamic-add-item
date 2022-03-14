import './App.css';
import { Box, Container } from '@mui/material';
import CreateList from './pages/CreateList';

function App() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          flexGrow: 1,
          alignItems: 'center',
          flexDirection: 'column',
          padding: 4,
        }}
      >
        <CreateList />
      </Box>
    </Container>
  );
}

export default App;
