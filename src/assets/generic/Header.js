import React from "react";
import { Link } from "react-router-dom";
import { images } from "../Images";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light h-100 ">
        <div>
          <Link className="navbar-brand " href="#">
            <img src={images.logo} alt="Logo" width={43} height={43} />
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarCollapse">
          <ul className="navbar-nav mr-auto w-100 d-flex justify-content-end">
            <li class="nav-item d-flex justify-content-center align-items-center">
              <Link
                class="nav-link active px-4 py-1"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li class="nav-item d-flex justify-content-center align-items-center">
              <Link
                class="nav-link active px-4 py-1"
                aria-current="page"
                href="#"
              >
                About
              </Link>
            </li>
            <li class="nav-item d-flex justify-content-center align-items-center">
              <Link
                class="nav-link active px-4 py-1"
                aria-current="page"
                href="#"
              >
                Users
              </Link>
            </li>
            <li class="nav-item d-flex justify-content-center align-items-center">
              <Link
                class="nav-link active px-4 py-1"
                aria-current="page"
                href="#"
              >
                Research
              </Link>
            </li>
            <li class="nav-item d-flex justify-content-center align-items-center">
              <Link
                class="nav-link active px-4 py-1"
                aria-current="page"
                href="#"
              >
                Blog
              </Link>
            </li>
            <li class="nav-item d-flex justify-content-center align-items-center">
              <Link
                class="nav-link active px-4 py-1"
                aria-current="page"
                href="#"
              >
                Search
              </Link>
            </li>
            {/* <!-- Other navbar items here --> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
