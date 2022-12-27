// PASSOS:

// INITIAL STATE:

const initialState = {
  count: 0,
};

// ACTIONS / ACTION / ACTION CREATOR:
// INCREMENT
// DECREMENT
// RESET
// INCREMENT BY AMOUNT

// ACTION
{
  type: "INCREMENT";
}
{
  type: "DECREMENT";
}
{
  type: "RESET";
}
{
  type: "INCREMENT_BY_AMOUNT";
}

// ACTION CREATOR
const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};

const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};

const resetAction = () => {
  return {
    type: "RESET",
  };
};

const incAmountAction = () => {
  return {
    type: "INCREMENT_BY_AMOUNT",
  };
};

// REDUCERS:

// STORES:
