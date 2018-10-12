import React from "react";
import { Link } from "react-router-dom";


const NoMatch = () => (
  <div>
    <h1>404 Page Not Found</h1>
    <Link to={"/"} activeClassName="active"><button>Return to InStock</button></Link>
  </div>
);

export default NoMatch;
