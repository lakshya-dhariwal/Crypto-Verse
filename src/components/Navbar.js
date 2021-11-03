import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <div>
            <Link
              style={{ textDecoration: "none" }}
              className="navbar-brand"
              to="/"
            >
              <span id="logo">Cryptoverse</span>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              className={`nav-link }`}
              aria-current="page"
              to="/"
            >
              <span id="nav-link-crypto">Cryptocurrencies</span>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className={`nav-link `}
              to="/news"
            >
              <span>CryptoNews</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
