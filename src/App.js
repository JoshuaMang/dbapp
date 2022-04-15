import logo from './logo.svg';
import './App.css';
import Art_Piece from './components/artpiece';
import Navbar from './components/navbar';
import Art_Piece_Archive from './components/artpiecearchive';
import Customer_Info from './components/Customer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Department from './components/department';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/artpiece' exact component={Art_Piece} />
        <Route path='/artpiecearchive' component={Art_Piece_Archive} />
        <Route path='/Customer' component={Customer_Info} />
        <Route path='/department' component={Department} />
       
        </Routes>
    </Router>

       
  );
}

export default App;
