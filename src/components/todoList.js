import React from 'react';
import ListItem from "./listItem";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listItems = this.props.listItems.map((text, index) =>
      <ListItem 
        text = {text}
        key = {"todoItem"+index}
        onComplete = {this.props.onComplete}
        onDelete = {this.props.onDelete}
      />
    );
    return (
      <div className = "row">
        <div className = "col-lg-12">
          <ul id = "my-list" className = "task-list">
            {listItems}
          </ul>
        </div>
      </div>
    )
  }
}