
import React,  { createContext, useContext, useReducer } from "react";
//data layer

    /*redux and context api work can be acessed from anywhere*/
  
  //setup data layer
  //record of basket
  //keep track of user
  
export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//this is how we use inside context
export const useStateValue = ()=>useContext(StateContext);
