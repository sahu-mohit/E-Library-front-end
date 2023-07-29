import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    const style = {
        position :'fixed',
        width:'100%',
        top:'0',
        left:'0',
    }
    return (
      <div style={style}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <img src="./assests/images/mklogo.png" alt="MKLogo"></img>
            <a className="navbar-brand" href="/">
              Meri Kitab
            </a>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Book Type
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Motivational Book
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Comic Book
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                      Horror Books
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                      Biography
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                      Historical Fiction
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contact Us
                  </a>
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
              <a href="/login"><h3 style={{color:'white',marginLeft: '15px',textDecoration:'inherit'}}>Login</h3></a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
