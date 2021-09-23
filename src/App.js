import logo from './logo.svg';
import './App.css';
import {Bike} from './body/Bike';
import {Laptop} from './body/Laptop';
import {Book} from './body/Book';
import {Home} from './body/Home';

function App() {
  return <div>
    <Bike/>
    <Laptop/>
    <Book/>
    <Home/>
  </div>
}

export default App;
