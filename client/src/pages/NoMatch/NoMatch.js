import React from "react";
import { Link } from "react-router-dom";
import "./NoMatch.css"


const NoMatch = () => (
  <div className="error">
  <h1 className="display-4">Oops! </h1>
    <h1 className="display-4">404 Page Not Found</h1>
    <Link to={"/"} activeClassName="active"><button className="btn btn-deep-purple">Return to InStock</button></Link>
  </div>
);

export default NoMatch;
