import './App.css';
import Header from "./Header";
import Home from "./Home";
import Mainpage from "./Mainpage";
import Checkoutpage from './Checkoutpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/checkout" element={<Checkoutpage />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
