import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

const BankAccount = () => {

    const account = useSelector((state) => state.account);
    const dispatch = useDispatch();
    const [balance, setBalance] = useState(account.balance);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setBalance(account.balance);
    })
    const handleAmountChange = (event) => {
        const newValue = parseInt(event.target.value);
        setAmount(newValue);
    }

    const depositClickHandler = () => {
        dispatch({
            type: 'deposit',
            amount: amount
        })
    }

    const withdrawClickHandler = () => {
        dispatch({
            type: 'withdraw',
            amount: amount
        })
    }

    return(
        <div>
            <h2> Bank Account {amount}</h2>
            <h3> Balance: {balance}</h3>
            Amount: <input
            onChange={handleAmountChange}
            type='number'
            value={amount}/>
            <button onClick={depositClickHandler}>Deposit</button>
            <button onClick={withdrawClickHandler}>Withdraw</button>

        </div>
    )
}

export default BankAccount;