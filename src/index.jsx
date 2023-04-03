import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

// main component
const App = () => {
  return (
    <div>
      <MainView />
    </div>
  );
};

const container = document.querySelector('#root');
const root = createRoot(container);

// render app in root DOM element
root.render(<App />);