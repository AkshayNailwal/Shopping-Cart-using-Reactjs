import React, { Component } from "react";
import Itemlist from "./List";
import Counterparent from "./parentcounter";
import products from "./products";

class ShoppingCart extends Component {
  state = {
    path: []
  };
  addtocart = (path) => {
      let newpath = this.state.path
      newpath=newpath.filter((statepath)=>statepath!==path)
      newpath.push(path)
      this.setState({path:newpath});
  };
  removeFromCart = (item) => {
      let newpath=this.state.path.filter((path) =>item!==path)
      this.setState({path:newpath})

  }
  render() {
    return (
    <div className="row">
      <div className="col d-inline-block bg-secondary">
          <h1 className="text-center mx-auto">Product List</h1>
        {products.data.map(item => (
         <Itemlist key={Math.random(0,10000)} item={item} addToCart={this.addtocart} />
        ))}
      </div>
      <div className="col float-left " >
      <h1 className="text-center mx-auto">Your Cart</h1>
        {this.state.path.length>0 ? (this.state.path.map((path)=>{
        return path ? <div className="p-4"><Counterparent key={Math.random(-777777,-1)} path={path} handleDelete={this.removeFromCart}/> </div> : null })): <img src={require("./p.jpg")} alt="NA" className=" mx-auto d-block w-25"/> }
      </div>
    </div>
    );
  }
}

export default ShoppingCart;
