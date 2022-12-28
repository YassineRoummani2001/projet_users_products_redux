import React from "react";
import { Link } from "react-router-dom";
import "../../styles.css"

const Navbar = () => {
  return (
    <div id="navbar" className="col bg-dark py-2 ">
      <nav className="navbar bg-dark navbar-dark">
      <Link to={"/"} className="navbar-brand ">
          Home
        </Link>
        <Link to={"/Users"} className="navbar-brand ">
          Users
        </Link>
        <Link to={"/Product"} className="navbar-brand ">
          Products
        </Link>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </nav>
      
    </div>
  );
};

export default Navbar;
