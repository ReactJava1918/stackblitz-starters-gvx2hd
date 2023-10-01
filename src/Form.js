import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Form() {
  let dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleDeposit = () => {
    
    dispatch({ type: 'deposit', payload: amount });
    setAmount('');
  };

  const handleWithDraw = () => {
    dispatch({ type: 'withdraw', payload: amount });
    setAmount('');
  }

  const handleAmountChnage = (event) => {
    let value = event.target.value;
    const parsedValue = parseInt(value);
    setAmount(parsedValue);
  };

  return (
    <>
      <div className="container">
        <h2>Form</h2>
        <div className="row">
          <div className="col-4">
            <input
              className="form-control"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={handleAmountChnage}
            />
          </div>
          <button className="btn btn-primary col-1" onClick={handleDeposit}>
            Deposit
          </button>
          <button className="btn btn-danger mx-2 col-1" onClick={handleWithDraw}>withdraw</button>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Full Name"
            />
          </div>
          <button className="btn btn-primary col-1 mx-2">Update</button>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <input
              className="form-control"
              type="number"
              placeholder="Enter Mobile"
            />
          </div>
          <button className="btn btn-primary col-1 mx-2">Update</button>
        </div>
        <button className="btn btn-danger col-1 mt-2">Reset</button>
      </div>
    </>
  );
}

export default Form;
