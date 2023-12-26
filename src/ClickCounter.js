import React from 'react'
import HigherOrder from './HigherOrder'

const ClickCounter = ({count,increment}) => {
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Click</button>
    </div>
  )
}

export default HigherOrder(ClickCounter)