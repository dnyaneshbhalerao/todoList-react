import React from 'react';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  onComplete() {
    alert("Hi there");
  }

  onDelete() {
    alert("I am on delete");
  }

  render() {
    return (
      <div className = "row">
        <div className = "col-lg-12">
          <ul id = "my-list" className = "task-list">
            <li className = "task">
              <div className ="right-tick" onClick = {this.onComplete}>&#10003;</div>
              lets add something in todo-list
              <div className="close-custom" onClick = {this.onDelete}>&#10006;</div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}