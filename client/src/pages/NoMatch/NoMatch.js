import React from "react";
import { Link } from 'react-router'


const NoMatch = () => (
  <div>
    <h1>404 Page Not Found</h1>
    <Link to={"/"} activeClassName="active">Return to InStock</Link >
  </div>
);

export default NoMatch;
