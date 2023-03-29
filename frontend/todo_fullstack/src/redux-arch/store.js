import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import {reducer as authreducer} from "./auth-reducer/reducer"
import {reducer as appreducer} from "./main-reducer/reducer"
const root_reducer=combineReducers({appreducer,authreducer})


const store=legacy_createStore(root_reducer,applyMiddleware(thunk))

export {store}