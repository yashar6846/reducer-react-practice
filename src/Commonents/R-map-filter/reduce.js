import React from 'react'

export const reduce = () => {
    const x = [2,3,5,7,9,10]
    const y = x.map(item => item+5)
    console.log(y);
    const z = x.filter(item => item % 2 === 0)
    console.log(z);
    const newy = x.reduce((res,initVal) => {
        res.push(initVal*3)
        return res
    },[])
    console.log(newy);
    const newz = x.reduce((result,initValue) => {
       if(initValue % 2 === 0){
           result.push(initValue)
       }
       return result
    },[])
    console.log(newz);
    return (
        <div>
            
        </div>
    )
}
