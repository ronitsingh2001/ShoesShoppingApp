import React, { Component } from "react";
import "./Catalogue.css";
import { shoes } from "./Shoes";

export default class Catalogue extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }
  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("shoes") || "[]");
    let temp = data.map((s) => s.id);
    this.setState({cart:temp});
    console.log(this.state.cart);
  }

  handle = (shoes) => {
    let data = JSON.parse(localStorage.getItem("shoes") || "[]");
    if (this.state.cart.includes(shoes.id)) {
      data = data.filter((s) => {
        return s.id != shoes.id;
      });
    } else {
      data.push(shoes);
    }
    let temp =data.map(s=>s.id)
    this.setState({cart:temp})
    localStorage.setItem("shoes", JSON.stringify(data));
  };

  render() {
    return (
      <div>
        <div class="container flex catalogue">
          <div className="row mx-auto">
            {shoes.map((shoe) => (
              <div className="col-xxl-3 col col-lg-4 col-6">
                <div class="card mb-6">
                  <div class="imgBx">
                    <img src={shoe.src} />
                  </div>
                  <div class="contentBx">
                    <h2>{shoe.name}</h2>
                    <div class="size">
                      <h3>Size :</h3>
                      {shoe.size.map((s) => (
                        <span>{s}</span>
                      ))}
                    </div>
                    <div class="color">
                      <h3>Color :</h3>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <a className="cursor-pointer" onClick={() => this.handle(shoe)}>
                      {!this.state.cart.includes(shoe.id)
                        ? "Add to cart"
                        : "Remove from cart"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
