
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Header/><Home/></>}/>
        <Route path='/login'element={<h1>login</h1>} />
        <Route path='/checkout' 
          element={<><Header/><Checkout/></>}
        />
      </Routes>
    </div>
  );
}

export default App;
