import React from 'react'
import HigherOrder from './HigherOrder'

const HoverCompo = ({count,increment}) => {

  return (
    <div>
        <h1>{count}</h1>
        <button onMouseOver={increment}>Hover</button>
    </div>
  )
}

export default HigherOrder(HoverCompo)