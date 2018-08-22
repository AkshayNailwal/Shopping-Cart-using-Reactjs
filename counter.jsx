import React, { Component } from 'react';

class Counter extends Component {

    changeClass = () =>{
        let classes = "m-2 pl-4 pr-4 pt-2 pb-2 badge badge-"
        classes+= (this.props.counter.value===0) ? "warning" : "info";
        return classes;
    }
    formatCount = () => {
        return (this.props.counter.value === 0) ? "Zero" : this.props.counter.value ;
    }

    render() { 
        return (
            <div>
                <img src={this.props.counter.img!=="" ? require(`${this.props.counter.img}`) : ""} alt="NA" height="80px" width="100px"/>
                <br /><button className="btn btn-primary m-2 pl-4 pr-4 pt-2 pb-2" type="button" onClick={() => this.props.onReset(this.props.counter)}>Reset</button>
                <span className={this.changeClass()}>{this.formatCount()}</span>
                <span onClick={() => this.props.onIncrement(this.props.counter)} className="btn badge badge-grey badge-pill m-2 pl-4 pr-4 pt-2 pb-2 ">+</span>
                <span onClick={() => this.props.onDelete(this.props.counter)} className="btn badge badge-danger badge-pill m-2 pl-4 pr-4 pt-2 pb-2 ">Delete</span>
            </div>
        );
    }
    
}
 
export default Counter;