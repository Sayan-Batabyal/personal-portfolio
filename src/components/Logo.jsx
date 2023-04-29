import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({className=""}) => {
  return (
    <div>
       <Link to={"/"} style={{textDecoration:"none"}}><h1 className={` ${className} select-none  text-2xl  font-roboto `} >myPortfolio.</h1></Link> 
    </div>
  )
}

export default Logo