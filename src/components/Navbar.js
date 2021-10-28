import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
function Navbar() {
  let location = useLocation();
  let path = "";
  useEffect(() => {
    path = location.pathname;
  }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Cryptoverse
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${path === "/" ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${path === "/news" ? "active" : ""}`}
                  to="/news"
                >
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/coin/bitcoin">Bitcoin</Link>
              </li>
              <li className="nav-item">
                <Link to="/coin/ethereum"> Ethereum</Link>
              </li>
              <li className="nav-item">
                <Link to="/coin/dogecoin">Dogecoin</Link>
              </li>
              <li className="nav-item">
                <Link to="/coin/cardano">Cardano</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
