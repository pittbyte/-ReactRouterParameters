import { createStore } from 'redux';

const initialState = {
  selectedApp: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_APP':
      return {
        ...state,
        selectedApp: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;