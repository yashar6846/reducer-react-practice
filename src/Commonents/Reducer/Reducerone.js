import React, {useReducer} from 'react'

const initialVal= 0
const reduser = (state, action)=> {
  switch (action) {
      case 'increment' :
        return  state + 1
          case 'decrement':
          return  state - 1
              default:
                return  state
  }
}

function Reducerone() {
    const [count, dispatch] = useReducer(reduser, inShaleValuoy)
    const [countone, dispatchone] = useReducer(reduser, inShaleValuoy)
    return (
        <>
        <div>
           <h1>count: {count}</h1>
            <button onClick={()=> dispatch('increment')}>Incrimant</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
        </div>
        <div>
           <h1>count: {countone}</h1>
            <button onClick={()=> dispatchone('increment')}>Incrimant</button>
            <button onClick={()=> dispatchone('decrement')}>Decrement</button>
        </div>
        </>
    )
}

export default Reducerone
