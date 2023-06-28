import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'
import BookingPage from './Components/BookingPage.js'
import ConfirmedBooking from './Components/ConfirmedBooking';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/bookingconfirmation' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
