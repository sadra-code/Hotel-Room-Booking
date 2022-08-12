 import {useEffect, createContext, useReducer}  from "React";


 const FirstState = {

     user: Json.parse(localStorage.getItem("user")) || null, loading: false, error: null

 };

 export const AuthContext = createContext(FirstState);


 const AuthReducer = (state, action) => {

       switch (action.type) {

         case "LoginStart":
           return {

                   user: null, loading: true, error: null       
           };    

      

       case "LoginSuccess":

           return{

                   user: action.payload, loading: false, error:null

           };


       case "LoginFail":

           return{

                    user: null, loading:false, error: action.payload

           };

       case  "Logout":

             return{

                 user: null, loading: null, error: null
             };

     
         default:
         return state;
     }
   };



 export const AuthContextProvider = ({children}) => {

        const [ state, dispatch] = useReducer(AuthReducer, FirstState);

 }

 useEffect(() =>{

       localStorage.setItem("user", Json.stringify(state, user));
      
      }, [state, user])

       
         return (

              < AuthContext.Provider value = {{user: state.user, loading: state.loading, error: state.error, dispatch}}>

              {children}
    
              </AuthContext.Provider>

         );

 































