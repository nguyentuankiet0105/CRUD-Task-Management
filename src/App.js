import './App.css';
import Home from './screen/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  );
}

export default App;
