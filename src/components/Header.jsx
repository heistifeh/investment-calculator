import React from 'react'

const Header = ({title}) => {
  return (
    <div id='header'>
      <img src="investment-calculator-logo.png" alt="" />
        <h1 >{title}</h1>

    </div>
    
  )
}

export default Header