import React from 'react';

export default class TodoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onAddTask = this.onAddTask.bind(this);
  }
  onAddTask() {
    alert("Hi I am clicked");
  }

  render() {
    return (
      <div className = "row">
        <div className = "col-lg-12">
          <div className = "todo-list-header">
            <h2 className = "title">Todo-List</h2>
            <div className = "custom-container">
              <input id = "newTodo" className  = "input-todo" type="text"/>
              <button className = "btn-cutom" onClick={this.onAddTask}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}