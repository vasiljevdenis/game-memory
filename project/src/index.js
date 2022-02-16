import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const defaultState = {
  start: false,
  m: 0,
  s: 0
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state, start: state.start = action.payload
      }
      case "STOPWATCH_M":
        return {
          ...state, m: state.m + action.payload
        }
        case "STOPWATCH_S":
          return {
            ...state, s: state.s = action.payload
          }
          default:
            return state
  }
}
let store = createStore(reducer);

ReactDOM.render(  
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);