
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userFormReducer from './userForm-reducer';
import cardEditReducer from "./cardEdit-reducer";
import cardListReducer from "./cardList-reducer";




let reducers = combineReducers({
    userForm: userFormReducer,
    cardEdit: cardEditReducer,
    cardList: cardListReducer
});


let store = createStore(reducers, applyMiddleware(thunk));



window.store = store;

export default store;