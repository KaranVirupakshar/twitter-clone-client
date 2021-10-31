const bankAccount = {
    balance: 321,
    name: 'Alice',
    dateOpened: '12/23/2020'
};

const BankAccountReducer = (state = bankAccount, action) => {

    switch (action.type) {
        case 'deposit':
            console.log(action.type);
            console.log(action.amount);
            return {
                ...state,
                balance: state.balance + action.amount
            };
            break;
        case 'withdraw':
            return {
                ...state,
                balance: state.balance - action.amount
            };
            break;
        default:
            return state;
    }
};

export default BankAccountReducer;