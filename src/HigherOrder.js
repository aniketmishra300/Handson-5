import React, {useState} from 'react'

function HigherOrder(ParameterCompo) {

    const Hoc = ()=>{

        const [count,setCount]= useState(0);

        const increment = ()=>{
            setCount(count+1)
        }

        return <ParameterCompo count={count} increment={increment}/>

    }

    return Hoc;

}

export default HigherOrder