export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const TEST = 'TEST';
export const RESET = 'RESET';
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const testButtonIncrement = () => {
  return {
    type: TEST,
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};
