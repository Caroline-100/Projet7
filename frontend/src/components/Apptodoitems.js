import React from "react";
import TodoItems from "./TodoItems";
import todosData from "./todoData";

// manipule la data
class Todo extends React.Component {
  constructor () {
    super()
    this.state = {
      todos:todosData,
    }
    this.handleclick = this.handleclick.bind(this)
  }
  handleclick(id) {
     this.setState(previusState => {
       console.log(previusState);
       const update = previusState.todos.map((todo)=>{
         if (todo.id === id) {
           todo.completed = !todo.completed
          //  console.log(todo.completed = !todo.completed);
         }
         return todo
       })
       console.log(update);
     return {todos: update}
     })
  }
  render() {

  const todoItems = this.state.todos.map((item) => {
    return <TodoItems key={item.id} item={item}
    handleclick={this.handleclick} />;
  });
  return <div>{todoItems}</div>;
  }
}
export default Todo;
