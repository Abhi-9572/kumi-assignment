import React from 'react'
import { useState, useEffect } from 'react';
import "./main.css"
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../actions/cartActions';
import { set } from 'core-js';
import { removeFromCart } from '../actions/cartActions';
import Topbar from './Mobile';
import Mobile from './Mobile';



export default function Main({ data, category }) {
  const dispatch = useDispatch();

  const [product, setProduct] = useState(data)
  const [value, setValue] = useState([])
  const [cartitems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
    setCartItems([...cartitems, product.id]);
  };

  function handlerClick(category) {
    setValue(category)

    const product = data.filter((p) =>
      p.category === category

    )
    setProduct(product);
  }

  function handleRemoveFromCart(product) {
    let updatedIds = cartitems.filter(id => id !== product.id);
    setCartItems(updatedIds);
    dispatch(removeFromCart(product));

  }

  return (
    <div className='maincontainer'>
       <Mobile category={category} handlerClick={handlerClick}/> 
      <div className="container">
        <div className="topbar">

        </div>
        <div className="sidebar">
          {category.map((val) => {
            return (<button onClick={() => handlerClick(val)} key={val} value="" className='sidebtn'>{val}</button>)
          })}
        </div>
        <div className="items">
          {product.map((val) => {
            return (<div key={val.id} className="itembox">
              <div className="image"><img className='img' src={val.images[0]} />
              </div>
              {!cartitems.includes(val.id) ? <button className='removebtn' onClick={() => handleAddToCart(val)}>Add</button>
                : <button className='removebtn' onClick={() => handleRemoveFromCart(val)}>Remove</button>}

            </div>)
          })
          }
          {data.map((val) => {
            console.log("val", val)
            if (val.category != product[0]?.category) {
              return (<div key={val.id} className="itembox">
                <div className="image"><img className='img' src={val.images[0]} /></div>
                {!cartitems.includes(val.id) ? <button className='removebtn' onClick={() => handleAddToCart(val)}>Add</button>
                  : <button className='removebtn' onClick={() => handleRemoveFromCart(val)}>Remove</button>}
              </div>)
            }
          })
          }

        </div>
      </div>
    </div>
  )
}