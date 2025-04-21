import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{padding: "2rem", border: "1px solid red", background: "#d14242", color: "white", display: "flex", justifyContent: "space-between"}} >
      <div style={{}}>
        Header
      </div>
      <div style={{display: "flex", gap: "1.2rem", fontSize: "1.3rem", cursor: "pointer",}}>
        <div > <Link to={"/"} style={{textDecoration: "none", color: "white"}} >First Component</Link> </div>
        <div><Link to={"/second"} style={{textDecoration: "none", color: "white"}} >Second Component</Link></div>
        <div>Third Component</div>
      </div>
    </div>
  )
}

export default Header
