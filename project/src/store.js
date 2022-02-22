import { createStore } from 'redux';

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

export default store;