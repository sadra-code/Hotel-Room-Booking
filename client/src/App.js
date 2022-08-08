import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import List from './components/List';
import Hotels from './components/Hotels';
// import Navbar from './components/Navbar';
// import styled from "styled-components";




const App = () => {
  return (
        // <div>My Home page</div>

        <BrowserRouter>
           
                <Routes>

                <Route  path="/"  element= {<Homepage/>}/>
                <Route  path="list"   element = {<List/>}/>
                <Route  path="hotels/:id"   element = {<Hotels/>}/>
                    
                
                 
            
            
            </Routes>
        </BrowserRouter>
    )
}

export default App;




// const BrowserRouter = styled.div``


// const Switch = styled.div``


// const Route = styled.div``


