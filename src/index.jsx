import { createRoot } from 'react-dom/client';
import './index.scss';

// main component
const MyApplication = () => {
  return (
    <div className="my-app">
      <div>Hello Parcel.</div>
    </div>
  );
};

const container = document.querySelector('#root');
const root = createRoot(container);

// render app in root DOM element
root.render(<MyApplication />);