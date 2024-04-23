import React from 'react'

const Buttons = ({polo, toggle,}) => {
  return (
<>
<button className="btn btn-primary mt-3" onClick={toggle}> {polo} </button>


</>

  )
}

export default Buttons;