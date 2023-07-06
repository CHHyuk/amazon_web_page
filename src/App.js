import './App.css';
import Header from "./Header";
import Home from "./Home";
import Mainpage from "./Mainpage";
import Checkoutpage from './Checkoutpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        if(authUser) {
          dispatch({
            type: 'SET_USER',
            user: authUser,
          })
        } else {
          dispatch({
            type: 'SET_USER',
            user: null,
          })
        }
      })
  },[]);

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/checkout" element={<Checkoutpage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/payment" element={<Payment/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
