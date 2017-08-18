import React from 'react';
import TodoHeader from './components/todoHeader';
import TodoList from "./components/todoList";
export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = "container-fluid">
        <TodoHeader/>
        <TodoList/>
      </div>
    );
  }
}