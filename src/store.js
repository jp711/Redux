import { createStore, combineReducers } from "redux";
import acoountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: acoountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
