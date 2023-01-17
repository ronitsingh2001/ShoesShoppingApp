import React, { Component } from "react";
import { Link } from "react-router-dom";
import nike from "../assets/nike.png";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div style={{ overflow: "hidden" }}>
          <div className="row">
            <div className="col-xs-12">
              <nav className="nav font-bold">
                <div className=" md:mx-6 logo">
                  <img src={nike} alt=""  />
                </div>
                <Link to="/">
                  <a className="nav-link md:mx-12  md:text-4xl "> Home </a>
                </Link>
                <Link to="/cart">
                  <a className="nav-link md:mx-12  md:text-4xl"> My cart </a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}
