import styled from "styled-components";
import Pluse from "./Pluse";
import Properties from "./Properties";

const Home = ()=>{

 return(
   <>
   <HoContainer>

   {/* <Pluse/> */}

   <HoTtle>Search by property name</HoTtle>

   {/* <Properties/> */}



   </HoContainer>
</>
 );
}




export default Home;





const HoContainer = styled.div`

      display: flex;
      flex-direction: center;
      align-items: center;
      margin-top: 60px;
      gap:35`;


const HoTtle = styled.h1`

      font-size: 25px;
      width: 1024px`;