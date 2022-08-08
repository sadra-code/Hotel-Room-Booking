import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faCar } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";





const Header = ()=>{

       return(
    
            <HeaderWrapper>
              <HeaderContainer>
                <HeaderItems>

                  <div><FontAwesomeIcon icon={faBed} />
                  <span>Stays</span>
                  </div>

                  <div><FontAwesomeIcon icon={faPlane} />
                  <span>Flights</span>
                  </div>

                  <div><FontAwesomeIcon icon={faCar} />
                  <span>Car rentals</span>
                  </div>

                  <HeaderButton>Sign in / Register</HeaderButton>



                </HeaderItems>
              </HeaderContainer>
            </HeaderWrapper>
            

     );
}


export default Header;


const HeaderWrapper = styled.div`
      
      display: flex;
      justify-content: center;
      position: relative;
      background-color: #003580;
      color: white`;
      
      
      


const HeaderContainer = styled.div`

      width: 100%;
      max-width: 1024px;
      margin: 25px 0px 90px 0px`;



const HeaderItems = styled.div``



const HeaderButton = styled.button`

     margin: 25px 0px;
     background-color: whitesmoke;
     color: navy;
     font-weight: 600;
     border: none;
     padding: 12px`;
 






  
 
  
  