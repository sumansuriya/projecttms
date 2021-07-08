import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from "@reduxjs/toolkit";
  import thunk from "redux-thunk";
  import { AdminReducer } from "./AdminReducer";
  
  
  const rootReducer = combineReducers({
    admin: AdminReducer,
  });
  
  const store = createStore(rootReducer, applyMiddleware(thunk));
  export { store };
  
  // HOW TO ACCESS THE STORE IN COMPOENNT
  // state.employeeList :: when there was only one reducer.
  // state.authSuccess :: when there was only one reducer.
  // state.employee.employeeList
  // state.user.authSuccess