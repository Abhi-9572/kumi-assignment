

import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import "./App.css"

import Home from './components/Home';
import Cart from './components/Cart';
import { Routes, Route } from "react-router-dom";
import axios from 'axios'
function App() {

  const [data, setData] = useState([])
  const hash = new Set()

  const [category, setCategory] = useState([])
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(response => {
        response.data.products.map((data) => {
          hash.add(data.category)

        })
        setCategory(hash);
        console.log(category)

        setData(response.data.products);

      })
      .catch(error => {
        console.error(error);
      });

  }, []);
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home data={data} category={category} />} />
      </Routes>
    </div>
  )
}


export default App;
