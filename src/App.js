

import React, { useState, useEffect } from 'react'
import "./App.css"
import Main from './components/Main';
import { Routes, Route } from "react-router-dom";
import axios from 'axios'
import NavBar from './components/NavBar';
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
      <NavBar/>
      <Routes>
        <Route index element={<Main data={data} category={category} />} />
      </Routes>
    </div>
  )
}


export default App;
