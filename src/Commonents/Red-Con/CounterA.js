import React, {useReducer} from 'react'
import ComponentA from './ComponentA';
 import { CounterCountext } from './CounterA';

export const CounterCountext = React.createContext()
const initialValue= 0
const reducer = (state, action)=> {
  switch (action) {
      case 'increment' :
        return  state + 1
          case 'decrement':
          return  state - 1
              default:
                return  state
  }
}

function CounterA() {
    const [counter, dispatch] = useReducer(reducer, initialValue)
    return (
      <CounterCountext.Provider value={{countstate: counter, countdispatch: dispatch}}>
          <div>
              Counter : {counter}
              <ComponentA />
          </div>
      </CounterCountext.Provider>
    )
}

export default CounterA
