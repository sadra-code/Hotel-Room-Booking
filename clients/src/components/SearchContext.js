import { createContext, useReducer } from "react";

const FirstState = {
    city: undefined, dates: [],  options: { adult: undefined, children: undefined, room: undefined,},
};

export const SearchContext = createContext(FirstState);

const SearchReducer = (state, action) => {
  switch (action.type) {

    case "New search":
       return action.payload;
    
    case "Reset search":
      return FirstState;
    
      default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, FirstState);

  return (

    <SearchContext.Provider value={{ city: state.city, dates: state.dates, options: state.options, dispatch,}}>

      {children}

    </SearchContext.Provider>
  );
};
