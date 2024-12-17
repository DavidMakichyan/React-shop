import axios from "axios";
import { useEffect, useState } from "react";
import clasess from "./HomePage.module.scss";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useNavigate } from "react-router-dom";
function HomePage() {
  const [state, setState] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to manage loading spinner

const Navigate = useNavigate()

  useEffect(() => {
    // Fetch data and manage loading state
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setState(response.data); // Set fetched data
        setLoading(false); // Turn off loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Turn off loading even if there's an error
      });
  }, []);

  // Define the loading spinner indicator
  const antIcon = <LoadingOutlined style={{ fontSize: 48, marginLeft: '800px' }} spin />;

  if (loading) {
    // Render the spinner while loading
    return (
      <div className={clasess["loading-container"]}>
        <Spin indicator={antIcon} size="large" />
      </div>
    );
  }

  // let SetProduct = localStorage.setItem('product')

  return (
    <div className={clasess["div"]}>
      {state.map((el, i) => (
        <div key={i} className={clasess["Home"]}>
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

export default HomePage;
