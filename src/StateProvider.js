import React, {createContext, useContext,useReducer} from "react";

//prepare the datalayer
export const StateContext =createContext();

//wrap our app and provide the data Layer
export const StateProvider=({ reducer,
    initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
//Pull information from the data layer
export const useStateValue=()=>useContext(StateContext);