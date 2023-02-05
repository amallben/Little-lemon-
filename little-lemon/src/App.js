import './App.css';
import {BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import BookingPage from './Components/BookingPage';
import ConfirmedBooking from './Components/ConfirmedBooking';

function App() {
  return (

    <BrowserRouter>
      <Routes> 
    <Route  index  element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
    <Route path="/bookingconfirmed" element={<ConfirmedBooking />}></Route>
    
      </Routes>

    </BrowserRouter>

    
  );
}

export default App;
