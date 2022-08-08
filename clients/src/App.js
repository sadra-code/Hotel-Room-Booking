import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './components/Home';
import List from './components/List';
import Hotels from './components/Hotels';
import Navbar from "./components/Navbar";
import Header from "./components/Header";


const App=()=> {

  return (
    <BrowserRouter>
    <Navbar/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotels/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;


