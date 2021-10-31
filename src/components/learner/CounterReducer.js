const count = 234;

const CounterReducer = (state = count , action) => {

    console.log(state);
    if(action.type === 'increment-counter')
        return  state + 1;
    else if(action.type === 'decrement-counter')
        return state - 1;

    return state;
}

export default CounterReducer;