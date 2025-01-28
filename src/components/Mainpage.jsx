import React from 'react'
import { Link } from 'react-router-dom'

const Mainpage = () => {
  return (
    <div className='container'>
        <div>
            <h1 className='main-text'>try chatgbt <br/> get a best experiences</h1>
           
        </div>
        <div className="land-nav">
        
                <li className='first'><Link style={{color:'white',textDecoration:'none'}} to="land">try chatgbt</Link></li>
                <li className='second'><Link style={{color:'white',textDecoration:'none'}} to="aboutus">about us</Link></li>
                <li className='third'><Link style={{color:'white',textDecoration:'none'}} to="signin">signin</Link></li>
                
        </div>
        
    </div>
  )
}

export default Mainpage