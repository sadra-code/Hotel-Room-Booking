import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";




const Navbar = () => {

  const { user } = useContext(AuthContext);

    return(

      <NavBar>
      <NavContainer>
        <LinkWrapper to="/" >Cienra Booking</LinkWrapper> 
       {user ? user.username : (
          <Items>
            <Button>Register</Button>
            <Button>Login</Button>
          </Items>
     )}
      </NavContainer>
    </NavBar>

       
    );

};




export default Navbar;


const NavBar = styled.div`
      
      display: flex;
      justify-content: center;
      background-color: #003580;
      height: 60px `;
  
  
  

const NavContainer = styled.div`
      
      align-items: center;
      justify-content: space-between;
      color: white;
      display: flex;
      width: 100%;
      max-width: 1050px`;
      
      

     



const LinkWrapper = styled(NavLink)``

      
const Items = styled.div``


const Button = styled.button`

      margin-left: 20px;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      color: #003580`;
     



