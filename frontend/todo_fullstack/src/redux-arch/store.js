import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";


const root_reducer=combineReducers({})


const store=legacy_createStore(root_reducer,applyMiddleware(thunk))

export {store}