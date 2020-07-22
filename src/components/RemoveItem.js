import React, { Component } from "react";
import "../syles/RemoveItem.css";
import { removeTodoItem } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (store) => ({
    todoState: store.todoReducer
  })

const mapDispatchToProps = (dispatch) => ({
  removeTodoItem: (indexToRemove) => dispatch(removeTodoItem(indexToRemove)),
});

class RemoveItem extends Component {
  constructor() {
    super();
    this.submitRemoveForm = this.submitRemoveForm.bind(this);
  }

    submitRemoveForm(e) {
    const removeItemIndex = document.querySelector("#removeItemIndex");
    this.props.removeTodoItem(removeItemIndex.value);
    const list = this.props.todoState.savedTodoItems;
    console.log("this is props.todoState.savedTodoItems: ", list);
  }

  render() {
    return (
      <div className="removeItemIndex">
        <form onSubmit={this.submitRemoveForm}>
          <input
            id="remove-item-index"
            type="text"
            placeholder="enter index"
            autoComplete="off"
          />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveItem);
