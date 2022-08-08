import styled from "styled-components";







const Navbar = ()=>{

   
    
    return (
         

        <NavWrapper>
         
        <NavContainer>
        
        <Logo> Cienra Booking</Logo> 
        
        
          <NavItems>
            <Button>Register</Button>
            <Button>Login</Button>
          </NavItems>
        
      </NavContainer>

</NavWrapper>
    );
};



export default  Navbar;



const NavWrapper = styled.div`
     
      display: flex;
      justify-content: center;
      height: 60px;
      background-color: navy`;




const NavContainer = styled.div`
      
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1024px;
      color: white`;
      

const Logo = styled.span`

      font-size: 30px`;
      


const NavItems = styled.div``



 const Button= styled.button`
       
       margin-left: 30px;
       border: none;
       padding: 5px 10px;
       cursor: pointer;
       color: navy`;
       

