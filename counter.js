const { createStore } = require("redux");
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

/* 1- O REDUCER É UMA FUNÇÃO QUE RECEBE O ESTADO ATUAL UMA ACTION FAZ A ALTERAÇÃO
DOS DADOS BASEADO NA ACTION E RETORNA O NOVO ESTADO  */
// 2- O NOVO VALOR DO ESTADO DEVE SER CALCULADO BASEADO NO ESTADO E NA ACTION
// 3- OS REDUCERS NÃO PODEM MUDAR O ESTADO EXISTENTE

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  }
};

// STORES:

/* GUARDA OS DADOS
NÃO TEM LÓGICA DE NEGOCIO
RECEBE AS ACTIONS E PASSA PARA O MIDDLEWARE
MUDA O ESTADO DO DADO NO DISPATCH DA ACTION */

const store = createStore(counterReducer);

// STORE / GET STATE

const stateData = store.getState()