import React from "react";
// display
function TodoItems(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration :"line-through",
  }
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed}
      //event when they fire ,they receive an event propetie
      onChange={()=>{props.handleclick(props.item.id)} }/>
      <p style={props.item.completed ? completedStyle : null}> {props.item.text}</p>
    </div>
  );
}
// props.item.completed}
export default TodoItems;

