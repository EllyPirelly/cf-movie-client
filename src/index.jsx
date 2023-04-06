import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';
import './index.scss';

const App = () => {
  return (
    <Container className='pt-0 pe-5 pb-5 ps-5 bg-dark bg-opacity-50 h-100'>
      <MainView />
    </Container>
  );
};

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<App />);