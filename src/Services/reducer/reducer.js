import { combineReducers } from "redux";
import { Auth_reducer } from './auth_reducer'
import { GetUserReducer } from "./GetUserReducer";
import { GetAllProductsReducer } from "./GetAllProductsReducer";
import { GetAllOrdersReducer } from "./GetAllOrdersReducer";

export default combineReducers({
    Auth_reducer,
    GetUserReducer: GetUserReducer,
    GetAllProductsReducer: GetAllProductsReducer,
    GetAllOrdersReducer: GetAllOrdersReducer,
})