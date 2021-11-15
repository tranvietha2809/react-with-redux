import {combineReducers} from "redux";
import accountReducer from "./accoutReducer";

const reducers = combineReducers({
    account: accountReducer
})

export default reducers