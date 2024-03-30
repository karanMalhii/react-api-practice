import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    try {
      let responsive = await fetch("https://fakestoreapi.comm/products");
      let mydata = await responsive.json();
      // console.log(mydata);
      setData(mydata);
    } catch (error) {
      console.log(error + " oops This is error");
    }
  }

  console.log(data);
  return (
    <div>
      <h1>Testing</h1>
    </div>
  );
}
