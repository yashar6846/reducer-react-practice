import React, {useContext} from 'react'
import { UserCountext, SalaryContext, CounterCountext } from './CounterA';
import { CounterCountext } from './CounterA';
function ComponentC() {
    const CContext = useContext(CounterCountext)
    return (
        <div>
            count : {CContext.countdtate}
            <button onClick={()=> CContext.countdispatch('increment')}>Incrimant</button>
            <button onClick={()=> CContext.countdispatch('decrement')}>Decrement</button>
        </div>
    )
}

export default ComponentC
