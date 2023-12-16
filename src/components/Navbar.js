import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black py-1 fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/Home">
              <img
                src="src/images/CSI_Logo_Nav.png"
                className="card-img-top"
                height={50}
                width={50}
                alt="Logo"
              />
            </a>
            {/* Add the navbar toggler for small screens */}
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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-0 mb-lg-0">
                {/* Place the ml-auto class on the ul element */}
                <li className="nav-item">
                  <a
                    className="nav-link active mx-3"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active mx-3" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active mx-3" href="#">
                    Our Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active mx-3" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
