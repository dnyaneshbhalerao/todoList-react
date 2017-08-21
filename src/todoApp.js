import React from 'react';
import TodoHeader from './components/todoHeader';
import TodoList from "./components/todoList";
export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      listItems: [
        "lets add something in todo-list"
      ]
    }
    this.onAddTask = this.onAddTask.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }
  onAddTask() {
    let inputTask = document.getElementById("newTodo");
    this.setState({
      listItems: this.state.listItems.concat([inputTask.value])
    });

  }
  onDelete(event) {
    alert("I am delete");
  }
  onComplete() {
    alert("Hi I am on Complete");
  }
  render() {
    return (
      <div className = "container-fluid">
        <TodoHeader onAddTask={this.onAddTask}/>
        <TodoList
          listItems = {this.state.listItems}
          onComplete={this.onComplete}
          onDelete= {this.onDelete}
        />
      </div>
    );
  }
}