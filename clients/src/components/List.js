import styled from "styled-components";
import Navbar from "./Navbar";
import {useState}  from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

// import Header from "./Header";





const List = ()=>{

const location = useLocation();

console.log(location);

// const [Destination, setDestination] = useState(location.state.Destination)
const [date, setDate] = useState(location.state.date)
// const [options, setOptions] = useState(location.state.options)

    return (



        <div>
            <Navbar/>
            {/* <Header type="list"/>  */}
            <ListWrapper> 
             <ListContainer>  
               <ListSerach>  
                <h1>Serach </h1>
                <ListItem>

                <Label> Destination</Label>

                <Input type="text"  />

                </ListItem>

                <ListItem>

                <Label> Check-in Date</Label>
                <span>{`${format(date[0].startDate,"MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

                <Input type="text"  />

                </ListItem>


                </ListSerach> 

              <ListResult></ListResult>




             </ListContainer>
            </ListWrapper>
            
            </div>
        
    );
}


export default List;



const ListWrapper = styled.div`

      display: flex;
      justify-content: center;
      margin-top: 20px`;



const ListContainer = styled.div`

      display: flex;
      width: 100%;
      max-width: 1024px;
      gap:20px`;


const ListSerach = styled.h1`
      background-color: orange;
      flex: 1;
      position: sticky;
      top: 10px;
      padding: 10px;
      border-radius: 10px`;

const ListItem = styled.div`

      display:flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 10px`;


     



const Label = styled.label`

      font-size: 12px`;



const Input = styled.input`

      height: 30px;
      border: none;
      padding: 5px`;

const ListResult = styled.div`

     flex:3`;




     /* style={{fontSize:"20", color:"velvet", marginBottom:"10px"}}> */