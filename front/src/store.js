import { createContext } from 'react';

const initialState = {
    count: 0,
    message: '',
  };


  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 };
      case 'decrement':
        return { ...state, count: state.count - 1 };
      case 'setMessage':
        return { ...state, message: action.payload };
      default:
        return state;
    }
  }


export const StoreContext = createContext();
