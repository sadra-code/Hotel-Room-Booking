import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faCar, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
// import {NavLink} from "react-router-dom";
import {DateRange} from "react-date-range";
import "react-date-range/dist/theme/default.css"; // theme css file
import { useContext, useState } from "react";
import {format} from "date-fns";







const Header = ({type})=>{


 const [dates, setDates] = useState([{startDate: new Date(), endDate: new Date(),key: "selection",},]);
 const [openDate, setOpenDate] = useState(false);



 const [openPerson, setOpenPerson] = useState(false); 
 const [persons, setPersons] = useState({ adult: 1, children: 0, room: 1, });
 const [destination, setDestination] = useState("");
   
 




 const handleOption = (name, operation) => {
    setPersons((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? persons[name] + 1 : persons[name] - 1,
      };
    });
  };


  return (
       
    <HeaderWrapper>
       
      
    
            <HeaderList>  /headerlist/
              
                <ListActive>    /headerlistitem.active/
                  <div><FontAwesomeIcon icon={faBed} />
                  <span>Stays</span></div>
                </ListActive>
                  
               <HeaderContainer> /headerlistitem/   
                  <div><FontAwesomeIcon icon={faPlane} />
                  <span>Flights</span></div>
               </HeaderContainer>

               <HeaderContainer>
                  <div><FontAwesomeIcon icon={faCar} />
                  <span>Car rentals</span></div>
               
               </HeaderContainer>

            </HeaderList>   

                  
            
                  <>
                  
                  
                  <HeaderSearch>
                  <SearchItem>
                  <FontAwesomeIcon icon={faBed} style={{color: "black"}}/>
                  <input type="text" placeholder="Where are you going?" style={{ border: "none", outline: "none"}}  onChange={(e) => setDestination(e.target.value)
                  }/>
                  </SearchItem>
                 
                 
                
                
                
                  <SearchItem>
                  <FontAwesomeIcon icon={faCalendarDays}  style={{color: "black"}}/>
                 
                  <span onClick={() => setOpenDate(!openDate)} style={{color: "black"}} >

                   {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format( dates[0].endDate, "MM/dd/yyyy" )}`}</span>

                   {openDate && ( <DateRange editableDateInputs={true} onChange={(item) =>

                   setDates([item.selection])} moveRangeOnFirstSelection={false} ranges={dates} style= {{ position: "absolute", top: "50px", zIndex:"2"}} 
                    minDate={new Date()} /> )}

                  </SearchItem>


                 
                 <SearchItem>
                 <FontAwesomeIcon icon={faPerson} style={{color: "black"}} />

                 <span onClick={() => setOpenPerson(!openPerson)} style={{color: "black"}} >

                 {`${persons.adult} adult · ${persons.children} children · ${persons.room} room`}
                 
                 </span>

                 {openPerson && ( <POptions> <IOptions> 

                 <span>Adult</span> 
                 
                 <COption> 
                 <CButton disabled={persons.adult <= 1} 
            //       /optionCounterButton/ /CB/
                    onClick={() => handleOption("adult", "d")} >
                 persons.adult--;

                 </CButton> 


                 <span>
                 {persons.adult}
                 </span>

                 <CButton>
                          
                   onClick={() => handleOption("adult", "i")}

                   persons.adult++;
                        
                 </CButton>

                 </COption>
                 </IOptions>
                
                 
                 <IOptions>
                      <span>Children</span>
                  <COption>
                  <CButton disabled={persons.children <= 0}
                      onClick={() => handleOption("children", "d")}>

                        persons.children--;
                  </CButton>

                  <span>
                  {persons.children}
                  </span>
                  <CButton onClick={() => handleOption("children", "i")}>
                          persons.children++;
                  </CButton>
                      
              </COption>
              </IOptions>
                 
                 
                 
             
                <IOptions> 
                  <span>Room</span>

                  <COption> 
                  <CButton disabled={persons.room <= 1} onClick={() => handleOption("room", "d")} > 
                      
                      persons.room--;
                  </CButton> 

                  <span>{persons.room}</span>

                  <CButton onClick={() => handleOption("room", "i")} > 
                  
                       persons.room++; 
                  
                  
                  </CButton> 
                  </COption> 
                  </IOptions> 
                  </POptions>  
                  
                  )}
                  
                  
                  {/* <SearchItem> <HB  onClick={handleSearch}> Search </HB> </SearchItem>  */}
                  </SearchItem>
                  </HeaderSearch> 
                  
                  </> 
                  
            {/* )}  */}
                  
                  
                  </HeaderWrapper> 
            // </HeaderContainer> 
                 
                 
                 
     );
};


export default Header;


const HeaderWrapper = styled.div`
      
      display: flex;
      justify-content: center;
      position: relative;
      background-color: #003580;
      color: white`;
      
      


const HeaderList = styled.div`
      
      display: flex;
      margin-bottom: 60px;
      gap:45`;



const HeaderContainer = styled.div`

      display:flex;
      align-items: center;
      gap: 15px`;



const ListActive = styled.div`

      border: 2px solid black;
      border-radius: 25px;
      padding:10px`;

      /* &.active {color: red}; */



const HeaderSearch = styled.div`

      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      max-width: 1024px;
      position: absolute;
      height: 35px;
      background-color: white;
      border: 3px solid green;
      padding: 10px 0px;
      border-radius: 5px;
      bottom: -30px`;





const HeaderItems = styled.div``



/* const HeaderButton = styled.button`

     margin: 25px 0px;
     background-color: whitesmoke;
     color: navy;
     font-weight: 600;
     border: none;
     padding: 12px`; */
 









const SearchItem = styled.div`

    display: flex;
    align-items: center;
    gap: 15px`;



const POptions = styled.div`

      z-index: 2;
      position: absolute;
      top: 60px;
      background-color: white;
      color: gray;
      border-radius: 6px;
      box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);`


const IOptions = styled.div`

      display: flex;
      justify-content: space-between;
      width:  200px;
      margin: 10px`;


const COption = styled.div`

      display: flex;
      align-items: center;
      font-size: 14;
      color: black;
      gap: 12px`;




const CButton = styled.button`

      background-color: white;
      color:navy;
      border: 2px solid yellow;
      width: 40px;
      height: 40px`;



      


      

  
 
  
  