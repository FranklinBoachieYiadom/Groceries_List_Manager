import React from 'react'


const Footer = ({length}) => {

  return (
  <footer>
    {length?
   <p>{length} List {length===1 ? "Item": "Items"}</p>
   :"No Items"}
  </footer>
  )
}

export default Footer