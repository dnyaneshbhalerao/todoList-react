import React from 'react';
import ListItem from "./listItem";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = "row">
        <div className = "col-lg-12">
          <ul id = "my-list" className = "task-list">
            <ListItem
              text="lets add something in todo-list"
              onComplete = {this.props.onComplete}
              onDelete = {this.props.onDelete}
            >
            </ListItem>
          </ul>
        </div>
      </div>
    )
  }
}