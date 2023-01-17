import React, { Component } from "react";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      shoes: [],
      total: 0,
      delivery: 0,
    };
  }
  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("shoes") || "[]");
    this.setState({ shoes: data });
    let temp = 0;
    data.forEach((shoe) => {
      temp += shoe.price;
    });
    this.setState({ delivery: Math.round(temp / .975)/ 100 });
    this.setState({ total: temp });
  }

  delete = (shoe) => {
    let data = JSON.parse(localStorage.getItem("shoes") || "[]");
    data = data.filter((s) => s.id != shoe.id);
    localStorage.setItem("shoes", JSON.stringify(data));
    this.setState({ shoes: data });
    let temp = 0;
    data.forEach((shoe) => {
      temp += shoe.price;
    });
    this.setState({ delivery: Math.round(temp / .975) /100 });
    this.setState({ total: temp });
  };

  render() {
    return (
      <div className="container p-6">
        <div className="row flex justify-center">
          <div className=" col-xl-6 ">
            <table class="table">
              <thead>
                <tr>
                  <th className="text-4xl">Cart</th>
                </tr>
              </thead>
              <tbody>
                {this.state.shoes.length < 1 ? (
                  <h1 className="text-3xl text-secondary p-6">
                    No Item in Cart!
                  </h1>
                ) : (
                  this.state.shoes.map((s) => (
                    <tr>
                      <th>
                        <img className="cart-img" src={s.src} alt="" />
                      </th>
                      <th>{s.name}</th>
                      <th>${s.price}</th>
                      <th>
                        <button
                          className="btn btn-danger rounded-full"
                          onClick={() => this.delete(s)}
                        >
                          X
                        </button>
                      </th>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <h1 className=" text-3xl">Summary</h1>
            {!this.state.shoes.length < 1 ? (
              <>
                <div className="flex mt-8   justify-between">
                  <div style={{ fontWeight: "500" }}>Subtotal</div>
                  <div>${this.state.total}</div>
                </div>
                <div className="flex mt-2  justify-between">
                  <div style={{ fontWeight: "500" }}>
                    Estimated Delivery & Handling
                  </div>
                  <div>${this.state.delivery}</div>
                </div>
                <hr className="mt-8" />
                <div className="flex mt-2  justify-between">
                  <div style={{ fontWeight: "500" }}>Total</div>
                  <div>${Math.round(this.state.delivery + this.state.total)}.00</div>
                </div>
                <hr className="mt-3" />
                <div>
                  <button className="btn container mx-auto text-2xl m-6 btn-dark rounded-full">
                    Checkout
                  </button>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
