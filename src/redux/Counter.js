import React from 'react';
import {connect} from "react-redux"
import {handleDecrement,handleIncrement} from "./action";

const Counter=(props)=>{
return(
    <div>
        <button id="increment-button" onClick={props.handleIncrement}>+</button>
         <span id='display-count'>{props.count}</span>
        <button id='decrement-button' onClick={props.handleDecrement}>-</button>
    </div>
)
}

const mapDispatchToProps={
    handleIncrement:handleIncrement,
    handleDecrement:handleDecrement
}

const mapStateToProps=(state)=>{
    return{
        count:state.count
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)