import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Welcome to home page </h2>

      <ul>
        <Link to="/fetch">
          1 Fetch-method <br />
        </Link>
        <Link to="/axcius">
          2 Axios-method <br />
        </Link>
        <Link to="/reactquery">3 React-Query</Link>
      </ul>
    </div>
  );
}
