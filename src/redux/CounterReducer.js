import { DECREMENT, INCREMENT, RESET, TEST } from './actions';
import { combineReducers } from 'redux';

const initialState = {
  step: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      if (state.step < 8) {
        return { ...state, step: state.step + 1 };
      } else return state;
    case DECREMENT:
      if (state.step > 0) {
        return { ...state, step: state.step - 1 };
      } else return state;
    case TEST:
      if (state.step < 8) {
        return {
          ...state,
          step: state.step + 1,
        };
      } else return state;
    case RESET:
      return {
        step: 1,
      };
    default:
      return state;
  }
};

const counterReducer = combineReducers({ counter });
export default counterReducer;
