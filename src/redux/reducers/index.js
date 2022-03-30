import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import useReducer from "./userReducer"

 let reducer = combineReducers({
    category: categoryReducer,
    user: useReducer
})
export default reducer