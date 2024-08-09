import React from 'react';
import { Link,Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Pizza Store</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/items">All Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add Item</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
        <Outlet/>
    </>
    
  );
};

export default Navbar;