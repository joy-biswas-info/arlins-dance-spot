import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './Components/Banner/Banner';
import BookingItems from './Components/BookingIteams/BookingItems';
import BookingPage from './Components/BookingPage/BookingPage';
import NavBar from './Components/Nav-bar/NavBar';
import {
  BrowserRouter as Router,Route, Routes
} from 'react-router-dom';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">      
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path='booking-items' element={<BookingItems />} />
        </Routes>
        <Routes>
          <Route path='booking-items/:day' element={<BookingPage />} />
        </Routes>
        
        
      </Router>

      
    </div>
  );
}

export default App;
