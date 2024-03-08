import { useState, useEffect, React } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  // timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});
function Product({ product }) {
  return (
    <li>
      {product.id}.{product.title}
    </li>
  );
}

export default function Axcius() {
  const [products, setProducts] = useState([]);

  // Function used to all api using fetch method
  async function getProducts() {
    let response = await instance.get("products");
    let users = await instance.get("users");

    // await instance.get("products")
    // let response = await fetch("https://fakestoreapi.com/products");
    // let data = await response.json();
    setProducts(response.data);
    console.log(users.data);
  }

  // Useeffect resposible to fetch products only once when component loaded
  useEffect(function () {
    getProducts();
  }, []);


  return (
    <div>
      <h2> Products</h2>
      <ul>
        {/* condition ? true : false */}
        {/* condition && true */}

        {products.length > 0 &&
          products.map((product, index) => {
            return <Product product={product} key={index} />;
          })}
      </ul>
    </div>
  );
}
