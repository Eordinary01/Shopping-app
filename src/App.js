
import './App.css';
import {  Routes , Route } from 'react-router-dom';
import Home from "./pages/home";
import Cart from "./pages/cart";
import Header from "./component/header";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>

      
      
    </div>
  );
}

export default App;
