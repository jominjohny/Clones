//Setup Data layer
//we need this to track the basket

import React, {createContext , useContext , useReducer} from 'react'

//The data Layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({reducer , initialState , children}) => ( 
         <StateContext.Provider value={useReducer(reducer, initialState)}>
             {children}
         </StateContext.Provider>
    )
    

//This is how we use it inside component
export const useStateValue = () => useContext(StateContext); 