import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar-bg">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand">Trendy</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link active"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button
                  onClick={() => navigate("/register")}
                  className="btn btn-style"
                  type="submit"
                >
                  SignUp
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="btn btn-style btn-style-border"
                  type="submit"
                >
                  SignIn
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
