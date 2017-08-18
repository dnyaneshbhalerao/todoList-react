import React from 'react';
import ListItem from "./listItem";

export default class TodoHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = "row">
        <div className = "col-lg-12">
          <div className = "todo-list-header">
            <h2 className = "title">Todo-List</h2>
            <div className = "custom-container">
              <input id = "newTodo" className  = "input-todo" type="text"/>
              <button className = "btn-cutom" onClick={this.props.onAddTask}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}