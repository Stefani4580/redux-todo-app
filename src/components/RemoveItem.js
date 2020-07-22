import React, { Component } from 'react'
import "../syles/DeleteItem.css"
import {removeTodoItem} from "../actions";
import {connect} from "react-redux";

// const mapStateToProps = (store) => ({
//     todoState: store.todoReducer
//   })

const mapDispatchToProps = dispatch => ({
    removeTodoItem: (indexToRemove) => dispatch(removeTodoItem(indexToRemove))
});









export default connect(null, mapDispatchToProps) (RemoveItem);