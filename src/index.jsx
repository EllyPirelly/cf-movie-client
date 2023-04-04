import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';
import './index.scss';

// main component
const App = () => {
  return (
    <Container className='p-5 bg-dark bg-opacity-50 h-100'>
      <MainView />
    </Container>
  );
};

const container = document.querySelector('#root');
const root = createRoot(container);

// render app in root DOM element
root.render(<App />);