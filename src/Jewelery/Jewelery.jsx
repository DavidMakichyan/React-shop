import axios from "axios";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import clasess from "./Jewelery.module.scss";
import { LoadingOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function Jewelery() {
  const [state, setState] = useState([]); // State for API data
  const [loading, setLoading] = useState(true); // State for loading spinner
  const [error, setError] = useState(null); // State for error handling
  const Navigate = useNavigate()
  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        setState(response.data); // Set fetched data
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError("Failed to fetch data. Please try again later."); // Set error message
        setLoading(false); // Stop loading even on error
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
      {state.map((el, i) => (
        <div key={i} className={clasess["Jewelery"]}>
          <p className={clasess["Category"]}>{el.category}</p>
          <img className={clasess["img"]} src={el.image} alt={el.title} />
          <p className={clasess["p-one"]}>{`${el.title.substring(0, 28)}...`}</p>
          <p className={clasess["p-two"]}>{`${el.description.substring(0, 100)}...`}</p>
          <div className={clasess["price"]}>Price: ${el.price}</div>
          <button className={clasess["button"]}onClick={() => {
    const existingCart = JSON.parse(localStorage.getItem('products')) || [];
    existingCart.push(el);
    localStorage.setItem('products', JSON.stringify(existingCart));
Navigate('/cart')
window.location.reload(true)
  }}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Jewelery;
