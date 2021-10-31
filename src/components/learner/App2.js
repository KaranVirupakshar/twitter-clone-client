import React from "react";
import Hello from "./hello";
import HelloReducer from "./helloreducer";
import CounterReducer from "./CounterReducer";
import BankAccountReducer from "./BankAccountReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import Counter from "./Counter";
import BankAccount from "./BankAccount";

const mainReducer = combineReducers({hello : HelloReducer, count : CounterReducer, account: BankAccountReducer})
const store = createStore(mainReducer);

const App2 = () => {
    return(
        <Provider store={store}>
        <div>
            <h1>My App</h1>
            <BankAccount/>
            <Hello/>
            <Counter/>
        </div>
        </Provider>
    )
}

export default App2;