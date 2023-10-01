import { createStore } from 'redux';

const initialState = {
  balance: 0,
  fullName: 'siva',
  mobile: 7075568619,
};

function accountReducer(state = initialState, action) {
  console.log('Action Type: ' + action.type);
  console.log('Payload: ' + JSON.stringify(action.payload));

  switch (action.type) {
    case 'deposit':
      console.log('Deposit Action');
      console.log('Previous Balance: ' + state.balance);
      console.log('Deposit Amount: ' + action.payload);
      return { ...state, balance: state.balance + action.payload };

    case 'withdraw':
      console.log('Withdraw Action');
      console.log('Previous Balance: ' + state.balance);
      console.log('Withdraw Amount: ' + action.payload);
      return { ...state, balance: state.balance - action.payload };

    case 'mobileUpdate':
      console.log('Mobile Update Action');
      console.log('Previous Mobile: ' + state.mobile);
      console.log('New Mobile: ' + action.payload);
      return { ...state, mobile: action.payload };

    case 'nameUpdate':
      console.log('Name Update Action');
      console.log('Previous Name: ' + state.fullName);
      console.log('New Name: ' + action.payload);
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

const store = createStore(accountReducer);

export default store;
