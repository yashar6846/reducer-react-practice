import React, {useReducer} from 'react'
// import { useReducer } from 'react';

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

function ComponentA() {
    const [count, dispatch] = useReducer(reducer, initialValue)
    return (
        <>
           <h1>Count: {count}</h1>

            <button onClick={()=> dispatch('increment')}>Incrimant</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
        </>
    )
}

export default ComponentA