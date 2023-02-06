import React from 'react'
import  "./NavBar.css"
import { Outlet, Link } from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux';

function NavBar() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
  return (
    <div>
       <div className="main">
        <div className="heading"> <h3 className='mainHeading'>E-commerce</h3></div>
        <div className="right">
            <div className="home"></div>
            <div className="cart"><i className="fas fa-cart-plus" ></i><span className='span'>{cart.length}</span> </div>
        </div>
        </div> 
    </div>
  )
}

export default NavBar