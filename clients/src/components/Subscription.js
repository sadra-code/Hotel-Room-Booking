import styled from "styled-components";



const Subscription = ()=>{

     return(

              <SubWrapper>
                <SubTtle> Receive The Best Offer</SubTtle>
                  <SubContainer>Subscribe to Get The Best DEAL!</SubContainer>
                   <SubBox>
                    <input type="text"   placeholder=" Enter Your Email Address" />
                    <SButton>Subscribe</SButton>

                  </SubBox>
                </SubWrapper>

     );
}



export default Subscription;



const SubWrapper = styled.div`

      display: flex;
      flex-direction:column;
      align-items: center;
      width:100%;
      background-color: navy;
      color: white;
      gap: 25px;
      padding: 45px;
      margin-top:50px`;


const SubTtle = styled.h1``


const SubContainer = styled.span`

       font-size: 20px;
       margin-right:10px`;



const SubBox = styled.div`

      width: 300px;
      height: 30px;
      padding: 10px;
      border: none;
      margin-right: -60px`;


const SButton = styled.button`

      border:none;
      border-radius: 3px;
      height: 45px;
      background-color: green;
      color: white;
      font-weight: 50px`;
      

      

      

      
     