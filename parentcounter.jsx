import React, { Component } from "react";
import Counter from "./counter";
// import ItemList from "./List";

class Counterparent extends Component {
  state = {
    data: [
      { id: 1, value: 0 ,img: this.props.path},
      // { id: 2, value: 0 },
      // { id: 3, value: 0 },
      // { id: 4, value: 0 }
    ]
  };
  handleIncrement = (item) => {
    item.value+=1;
    let data = this.state.data.map(iter => iter.id===item.id ? item :iter);
    this.setState({data});
  }
  handleReset = (item) => {
    item.value=0;
    let data = this.state.data.map(iter => iter.id===item.id ? item :iter);
    this.setState({data});
  }
  render() {
    return (
      <div>
        {this.state.data.map(counter => (
          <Counter
           key={counter.id} 
           counter={counter}
           onReset={this.handleReset}
           onIncrement={this.handleIncrement}
           onDelete={()=>this.props.handleDelete(this.props.path)}
           />
        ))}
      </div>
    );
  }
}

export default Counterparent;
