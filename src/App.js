import Topbar from "./components/topbar/Topbar";
import Createlisting from "./pages/createlisting/Createlisting";
import Home from "./pages/home/Home";
import Listingdetails from "./pages/listingdetails/Listingdetails";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div >
        <Topbar />
        <Routes> 
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/createlisting" element={<Createlisting/>} />
            <Route exact path="/listingdetails" element={<Listingdetails/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
