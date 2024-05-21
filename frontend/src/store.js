import { createStore, combineReducers, applyMiddleware ,compose} from "redux";

import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    userLoginReducer,
    userRegisterReducer,
 
  } from "./reducers/userReducers";


  const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,

    });
    const initialState = {
        userLogin: { userInfo: userInfoFromStorage },
      };
    const middleware = [thunk];
   
const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
      //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    
  );


    export default store;