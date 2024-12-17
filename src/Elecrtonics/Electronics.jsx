import React from 'react'
import { useState, useEffect } from 'react';
import clasess from './Electronics.module.scss'
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";

export default function Electronics() {

  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const Navigate = useNavigate()
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/electronics").then((response) => {
      setState(response.data);
      setLoading(false);
      console.log(response);
    });
  }, []);

  const antIcon = <LoadingOutlined style={{ fontSize: 48, marginLeft: '800px' }} spin />;
  if (loading) {
    // Show Ant Design spinner while loading
    return (
      <div className={clasess["loading"]}>
        <Spin indicator={antIcon} size="large" />
      </div>
    );
  }
  if (error) {
    // Show error message if the API call fails
    return (
      <div className={clasess["error"]}>
        <p>{error}</p>
      </div>
    );
  }

  return (

    <div className={clasess["div"]}>
      {state.map((el, i) => {
        return (
          <div className={clasess["Electronics"]}>
            <p className={clasess["Category"]}>{el.category}</p>

            <img className={clasess["img"]} src={el.image} />

            <p className={clasess["p-one"]}>{`${el.title.substring(0,28)}...`}</p>
            <p className={clasess["p-two"]}>{`${el.description.substring(0,100)}...`}</p>
            <div className={clasess['price']}>Price: ${el.price}</div>
            <button className={clasess["button"]}onClick={() => {
    const existingCart = JSON.parse(localStorage.getItem('products')) || [];
    existingCart.push(el);
    localStorage.setItem('products', JSON.stringify(existingCart));
Navigate('/cart')
window.location.reload(true)
  }}>Add to cart</button>
          </div>
        );
      })}
    </div>
  
  )
}
