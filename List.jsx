import React, { Component } from "react";

class ItemList extends Component {

    render() { 
        return ( 
                <div className="p-5 col-md-4 d-inline-block" >
                    <img src={require(`${this.props.item.path}`)} alt="NA" height="80px" width="100px"/>
                    <p>{this.props.item.description}</p>
                    <button type="button" className="btn btn-primary" onClick={() => this.props.addToCart(this.props.item.path)}> ADD to Cart </button>
                </div>
         );
    }
}
 
export default ItemList;