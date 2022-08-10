import styled from "styled-components";






const Properties = ()=>{

      

    return(
   
            <PropWrapper>
              <PropContainer>
                <Img src="https://wallpaperaccess.com/full/2690553.jpg" alt="Hotel"/>
                <PropTtle>
                    <h1>Hotels</h1>
                    <h2>x hotels</h2>
                    
                    
                </PropTtle>            
               </PropContainer>


               <PropContainer>
                <Img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Apartment"/>
                <PropTtle>
                    <h1>Apartments</h1>
                    <h2>x apartments</h2>
                    
                    
                </PropTtle>            
               </PropContainer>

               <PropContainer>
                <Img src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Resort"/>
                <PropTtle>
                    <h1>Resorts</h1> 
                    <h2>x resorts</h2>
                    
                    
                </PropTtle>            
               </PropContainer>


            </PropWrapper>
    );
}


export default Properties;





const PropWrapper = styled.div`

      display: flex;
      justify-content: space-between;
      width:100%;
      max-width: 1024px`;
      





const PropContainer = styled.div`

      display:flex;
      justify-content: column;
      border-radius: 10px;
      flex:1;
      overflow: hidden`;
      


const Img = styled.img`

      width: 100%;
      height: 150px;
      object-fit: cover`;


const PropTtle = styled.div`
      
      display:flex;
      flex-direction: column;
      font-size: 18px;
      font-weight: 300`;