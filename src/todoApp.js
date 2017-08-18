import React from 'react';
import TodoHeader from './components/todoHeader';
import TodoList from "./components/todoList";
export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.onAddTask = this.onAddTask.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }
  onAddTask() {
    alert("Hi Im on add Task");
  }
  onDelete() {
    alert("Hi I am from main");
  }
  onComplete() {
    alert("Hi I am on Complete");
  }
  render() {
    return (
      <div className = "container-fluid">
        <TodoHeader onAddTask={this.onAddTask}/>
        <TodoList onComplete={this.onComplete} onDelete= {this.onDelete}/>
      </div>
    );
  }
}