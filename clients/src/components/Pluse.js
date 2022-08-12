import styled from "styled-components";





const Pluse = () => {


     return(


            <PlWrapper> 
             
              <PlContainer> 
                 
                 <Img1  src="https://frontier-canada.co.uk/wp-content/uploads/2018/09/quebec-fairmontchateaufrontenac-quebeccity-exterior800x800.jpg" alt="quebec"  />

              <PlTtle> 
                
                <h1>Quebeq</h1>
                <h2> X properties</h2>
                
            </PlTtle>   

             </PlContainer>

           
           {/* <PlContainer>
              
             <Img src="https://st.depositphotos.com/1007970/1223/i/950/depositphotos_12236509-stock-photo-barcelona-spain-december-14-la.jpg" alt="Barcelona"/>

            <PlTtle> 
                
              <h1>Barcelona</h1>
              <h2> X properties</h2>
                
            </PlTtle>  

         </PlContainer>


         <PlContainer>
              
              <Img   styles={{ minWidth: 20, minHeight: 20 }} src="https://images.unsplash.com/photo-1583316852564-02be226c9782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80" alt="Isfahan"/>
 
             <PlTtle> 
                 
               <h1>Isfahan</h1>
               <h2> X properties</h2>
                 
             </PlTtle>   */}
 
          {/* </PlContainer> */}

 
</PlWrapper>


     );
}




export default Pluse;



const PlWrapper = styled.div`

      display: flex;
      justify-content: space-between;
      width: 100;
      max-width: 1024;
      z-index: 3;
      gap: 18px`;



const PlContainer = styled.div`

     position: relative;
     border-radius: 8px`;
     /* overflow: auto`; */



const PlTtle = styled.div`

    position: absolute;
    bottom: -100px ;
    left: 20px`;





const Img1 = styled.img`
     
      margin-bottom: -200; 
      height: 300px;
      width: 300px`; 
      
      /* width: 100% ; */
      /* object-fit: cover/*/