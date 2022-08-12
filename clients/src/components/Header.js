import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faCar, faCalendarDays, faPerson, faGreaterThanEqual } from '@fortawesome/free-solid-svg-icons';
// import {NavLink} from "react-router-dom";
import {DateRange} from "react-date-range";
import "react-date-range/dist/theme/default.css"; // theme css file
import { useContext, useState } from "react";
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../SearchContext";
import { AuthContext } from "../../AuthContext";








const Header = ({type})=>{

      const [date, setDates] = useState([{startDate: new Date(), endDate: new Date(), key: "selection"}]);  
      const [openDate, setOpenDate] = useState(false);

      const [Destination, setDestination] = useState(null);





      const [openOptions, setOpenOptions] = useState(false); 
      const [options, setOptions] = useState({ adult: 1, children: 0, room: 1, });

      const navigate = useNavigate();
      const { user } = useContext(AuthContext);

      const handleOption = (name, operation) => {
            setOptions((prev) => {
              return {
                ...prev,
                [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
            };

      });
          };
        
      const { dispatch } = useContext(SearchContext);

      dispatch({ type: "NEW_SEARCH", payload: { Destination, date, options } });
      navigate("/hotels", { state: { Destination, date, options } });
    };



      }


      return (
       

            <div
            className={
              type === "list" ? "headerContainer listMode" : "headerContainer"
            }
          >
      

                  <HeaderWrapper> 
                    <HeaderContainer> 
                     
                     <HeaderList>  

                     <HeaderItems>  

                     <FontAwesomeIcon icon={faBed} />
                     <span>Stays</span>

                     </HeaderItems>

                     
                     <HeaderItems>  

                     <FontAwesomeIcon icon={faPlane} />
                     <span>Flights</span>

                     </HeaderItems>

                     
                     <HeaderItems>  

                     <FontAwesomeIcon icon={faCar} />
                     <span>Car rentals</span>

                     </HeaderItems>

                 </HeaderList>
                  <HeaderSearch>

                    <HSearchItem>
                     <FontAwesomeIcon icon={faBed} style={{color: "black"}}/>
                      <HSearchInput type="text"   placeholder="Where are you going?"  onChange={e => setDestination(e.target.value)}/>
                     </HSearchItem>


                     
                     <HSearchItem>
                     <FontAwesomeIcon icon={faCalendarDays} style={{color: "black"}}/>

                      <span onClick={() => setOpenDate(!openDate)}  style={{color:"gray"}}> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format( date[0].endDate, "MM/dd/yyyy" )}`} </span>

                      {openDate && <DateRange editableDateInputs={true} onChange={(item) =>
                      setDates([item.selection])} moveRangeOnFirstSelection={false} ranges={date}  style={{position:"absolute", top:"0"}}/>}

                     </HSearchItem>




                   <HSearchItem>
                      <FontAwesomeIcon icon={faPerson} style={{color: "black"}}/>
                      <span onClick={() => setOpenOptions(!openOptions)} style={{color:"gray"}}> {`${options.adult} adult · ${options.children} children · ${options.room} room`} </span>

                     {openOptions &&<Options>
                      <OptionItem>

                        <span OptionText> Adult </span>
                         <OCounter>

                        <OCBtn  disabled={options.adult <= 1}  onClick={() => handleOption("adult", "dec")} >-</OCBtn>
                         <OCNumber>{options.adult}</OCNumber>
                        <OCBtn onClick={() => handleOption("adult", "inc")}>+</OCBtn>
                      
                        </OCounter>
                     </OptionItem>

                     <OptionItem>

                        <span OptionText> Children </span>
                        <OCounter>

                        <OCBtn  disabled={options.children <= 0}onClick={() => handleOption("children", "dec")}>-</OCBtn>
                         <OCNumber>{options.children}</OCNumber>
                        <OCBtn onClick={() => handleOption("children", "inc")}>+</OCBtn>
                       
                        </OCounter>
                     </OptionItem>

                     <OptionItem>

                        <span OptionText> Room </span>
                        <OCounter>

                        <OCBtn disabled={options.room <= 1} onClick={() => handleOption("room", "dec")}>-</OCBtn>
                         <OCNumber>{options.room}</OCNumber>
                        <OCBtn onClick={() => handleOption("room", "inc")}>+</OCBtn>
                    
                        </OCounter>
                     </OptionItem>
                    </Options>
}
                  </HSearchItem>  

                      <HSearchItem>
                        <HSearchBtn onClick={handleSearch}> Search</HSearchBtn>  




                      </HSearchItem>





                   </HeaderSearch>
                 </HeaderContainer>
               </HeaderWrapper> 
       
      
                 
                 
     );
};


export default Header;


const HeaderWrapper = styled.div`
      
      display: flex;
      justify-content: center;
      position: relative;
      background-color: navy;
      color: white`;
      
         
const HeaderContainer= styled.div`

      width:100%;
      max-width:1024px;
      margin: 20px 0px 100px 0px`;


      
const HeaderList = styled.div`
      
      display: flex;
      margin-bottom: 50px;
      gap:45`;



const HeaderItems = styled.div`

      display:flex;
      align-items: center;
      gap: 10px;


      &:active{
    background-color: green;
    border:2px solid green;
  }`







const HeaderSearch = styled.div`

      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      max-width: 1024px;
      position: absolute;
      height: 30px;
      background-color: white;
      border: 5px solid green;
      padding: 10px 0px;
      border-radius: 5px;
      bottom: -25px`;




const HSearchItem = styled.div`   

    display: flex;
    align-items: center;
    gap: 10px`;


const HSearchInput = styled.input`

      outline: none;
      border: none`;





const HSearchBtn = styled.button`  

margin: 25px 0px;
background-color: green;
color: white;
font-weight: 600;
border: none;
padding: 12px`;





const OCounter = styled.div`

      display:flex;
      align-items: center;
      color: black;
      font-size: 12px;
      gap: 10px`;









    const Options = styled.div`

      z-index: 2;
      position: absolute;
      top: 50px;
      background-color: white;
      color: gray;
      border-radius: 6px;
      box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);`


const OptionItem = styled.div`

      display: flex;
      justify-content: space-between;
      width:  200px;
      margin: 10px`;


const  OCNumber= styled.div`

      display: flex;
      align-items: center;
      font-size: 14;
      color: black;
      gap: 12px`;




const OCBtn = styled.button`

      background-color: white;
      color:navy;
      border: 2px solid green;
      width: 30px;
      height: 30px`;



      


      

  
 
  
  