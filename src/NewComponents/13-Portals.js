import React from 'react'
import  ReactDOM  from 'react-dom'

function Portals() {
  return ReactDOM.createPortal(
    <h1>Portals</h1>,
    document.getElementById('portal root-DOM')
  )
}

export default Portals